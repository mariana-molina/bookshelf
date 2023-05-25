import React, { useState } from 'react';
import { Logo } from './components/Logo';
import './App.css';
import Dialog from '@mui/material/Dialog';
import { LoginForm } from './components/LoginForm';
import { DialogActions, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { buttonStyle } from 'styles';
import { UserObj } from 'types';

type NotAuthenticatedProps = {
	login: (formData: UserObj) => void;
	register: (formData: UserObj) => void;
	error: any;
	setError: any;
};

export const NotAuthenticated = ({
	login,
	register,
	error,
	setError,
}: NotAuthenticatedProps) => {
	const [openModal, setOpenModal] = useState('none');

	const handleClose = () => {
		setOpenModal('none');
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
				<LoginForm
					onSubmit={login}
					buttonText="Login"
					setAuthError={setError}
					authError={error}
				/>
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
				<LoginForm
					onSubmit={register}
					buttonText="Register"
					setAuthError={setError}
					authError={error}
				/>
			</Dialog>
		</div>
	);
};
