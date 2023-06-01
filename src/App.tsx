import React, { useEffect } from 'react';
import './App.css';
import { UserObj } from 'types';
import { auth } from './config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { NotAuthenticated } from 'NotAuthenticated';
import { Authenticated } from 'Authenticated';
import { BrowserRouter } from 'react-router-dom';
import { useAsync } from 'utils/hooks';

const App = () => {
	const [user, setUser] = React.useState('');
	const [error, setError] = React.useState('');

	const { data: isLoading, isIdle, isError, isSuccess } = useAsync('');

	const login = (formData: UserObj) => {
		const { email, password } = formData;
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user.email;
				if (user) {
					setUser(user);
					localStorage.setItem('email', user);
				}
				// ...
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
			});
	};

	const register = (formData: UserObj) => {
		const { email, password } = formData;
		createUserWithEmailAndPassword(auth, email, password)
			.then((data: any) => {
				localStorage.setItem('email', data.user.email);
				setUser(data.user.email);
				console.log('user registered succesfully');
			})
			.catch(error => {
				setError(error.code);
				console.log('error while auth');
			});
	};

	const logout = () => {
		localStorage.removeItem('email');
		setUser('');
	};

	useEffect(() => {
		const email = localStorage.getItem('email');
		if (email) setUser(email);
		else setUser('');
	}, []);

	return user ? (
		<BrowserRouter>
			<Authenticated user={user} logout={logout} />
		</BrowserRouter>
	) : (
		<NotAuthenticated
			login={login}
			register={register}
			setError={setError}
			error={error}
		/>
	);
};

export default App;
