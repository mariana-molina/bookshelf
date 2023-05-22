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
import { CropLandscapeOutlined } from '@mui/icons-material';

function App() {
	const [user, setUser] = React.useState('');
	const [error, setError] = React.useState('');

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
		//FALTA REDIRIGIR AL INICIO
	};

	return (
		<div>
			{user ? (
				<Authenticated user={user} logout={logout} />
			) : (
				<NotAuthenticated login={login} register={register} error={error} />
			)}
		</div>
	);
}

export default App;
