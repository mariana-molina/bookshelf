import React from 'react';
import { Logo } from './components/Logo';
import './App.css';
import { UserObj } from 'types';
import Dialog from '@mui/material/Dialog';
import { LoginForm } from './components/LoginForm';
import { DialogActions, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { DiscoverBooksScreen } from 'discover';

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
	const buttonStyle = {
		margin: '10px',
		'&:hover': {
			backgroundColor: 'blue',
			color: 'white',
		},
	};

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<Logo width="80" height="80" />
			<h1 className="text-xl font-medium m-5">Bookshelf</h1>
			<div className="flex flex-col ">
				<Button
					sx={buttonStyle}
					variant="outlined"
					onClick={() => setOpenModal('login')}
				>
					Login
				</Button>
				<Button
					sx={buttonStyle}
					variant="outlined"
					onClick={() => setOpenModal('register')}
				>
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
						<XMarkIcon />
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
						<XMarkIcon />
					</Button>
				</DialogActions>
				<DialogTitle>Register</DialogTitle>
				<LoginForm onSubmit={register} buttonText="Register" />
			</Dialog>
			<DiscoverBooksScreen />
		</div>
	);
}

export default App;
