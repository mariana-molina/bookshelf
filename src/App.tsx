import React from 'react';
import { Logo } from './components/Logo';
import './App.css';
import { Dialog } from '@reach/dialog';
import { UserObj } from 'types';

import { LoginForm } from './components/LoginForm';

function App() {
	const [openModal, setOpenModal] = React.useState('none');

	function login(formData: UserObj) {
		console.log('login', formData);
	}

	function register(formData: UserObj) {
		console.log('register', formData);
	}

	return (
		<div>
			<Logo width="80" height="80" />
			<h1>Bookshelf</h1>
			<div>
				<button onClick={() => setOpenModal('login')}>Login</button>
			</div>
			<div>
				<button onClick={() => setOpenModal('register')}>Register</button>
			</div>
			<Dialog aria-label="Login form" isOpen={openModal === 'login'}>
				<div>
					<button onClick={() => setOpenModal('none')}>Close</button>
				</div>
				<h3>Login</h3>
				<LoginForm onSubmit={login} buttonText="Login" />
			</Dialog>
			<Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
				<div>
					<button onClick={() => setOpenModal('none')}>Close</button>
				</div>
				<h3>Register</h3>
				<LoginForm onSubmit={register} buttonText="Register" />
			</Dialog>
		</div>
	);
}

export default App;
