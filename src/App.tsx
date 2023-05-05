import React from 'react';
import { Logo } from './components/Logo';
import './App.css';
import { UserObj } from 'types';
import Dialog from '@mui/material/Dialog';
import { LoginForm } from './components/LoginForm';
import { DialogActions, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
	const [openModal, setOpenModal] = React.useState('none');

	const handleClose = () => {
		setOpenModal('none');
	};

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
				<Button variant="outlined" onClick={() => setOpenModal('login')}>
					Login
				</Button>
			</div>
			<div>
				<Button variant="outlined" onClick={() => setOpenModal('register')}>
					Register
				</Button>
			</div>
			<Dialog
				aria-label="Login form"
				onClose={handleClose}
				open={openModal === 'login'}
			>
				<DialogActions>
					<Button variant="outlined" onClick={handleClose}>
						Close
					</Button>
				</DialogActions>
				<DialogTitle>Login</DialogTitle>
				<LoginForm onSubmit={login} buttonText="Login" />
			</Dialog>
			<Dialog
				aria-label="Registration form"
				onClose={handleClose}
				open={openModal === 'register'}
			>
				<DialogActions>
					<Button variant="outlined" onClick={handleClose}>
						Close
					</Button>
				</DialogActions>
				<DialogTitle>Register</DialogTitle>
				<LoginForm onSubmit={register} buttonText="Register" />
			</Dialog>
		</div>
	);
}

export default App;
