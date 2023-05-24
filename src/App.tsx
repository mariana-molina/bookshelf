import React from 'react';
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
import { FullPageSpinner } from 'components/lib';

const App = () => {
	const [user, setUser] = React.useState(null);
	const [error, setError] = React.useState('');

	const { data: isLoading, isIdle, isError, isSuccess } = useAsync('');

	const login = (formData: UserObj) => {
		const { email, password } = formData;
		signInWithEmailAndPassword(auth, email, password)
			.then((data: any) => {
				console.log('USER LOGIN SUCCESSFULLY:', data.user);
				localStorage.setItem('email', data.user.email);
				setUser(data.user.email);
			})
			.catch(error => {
				setError(error.code);
				console.log('error while signing in');
			});
	};

	const register = (formData: UserObj) => {
		const { email, password } = formData;
		// try {
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
		// }
	};

	const logout = () => {
		localStorage.removeItem('email');
		setUser(null);
		//FALTA REDIRIGIR AL INICIO
	};

	// if (isLoading || isIdle) {
	// 	console.log('loading');
	// 	return <FullPageSpinner />;
	// }

	if (isError) {
		console.log('error');
		return (
			<div>
				<p>Uh oh... There's a problem. Try refreshing the app.</p>
				<pre>{error}</pre>
			</div>
		);
	}
	// if (isSuccess) {
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
	// }
	// return null;
};

export default App;
