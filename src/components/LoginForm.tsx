import { TextField, DialogContent, DialogActions } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { UserObj } from 'types';
import Button from '@mui/material/Button';

type LogingFormProps = {
	onSubmit: (data: UserObj) => void;
	buttonText: string;
	authError: any;
	setAuthError: any;
};

export const LoginForm = ({
	onSubmit,
	buttonText,
	setAuthError,
	authError,
}: LogingFormProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		if (!email || !password) {
			setError('Provide an email and a password');
		}
		onSubmit({
			email,
			password,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
				<TextField
					label="Email"
					autoFocus
					id="email"
					type="email"
					value={email}
					onFocus={() => {
						setError('');
						setAuthError('');
					}}
					onChange={e => setEmail(e.target.value)}
					sx={{
						margin: '10px',
					}}
				/>
				<TextField
					label="Password"
					id="password"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					onFocus={() => {
						setError('');
						setAuthError('');
					}}
					sx={{
						margin: '10px',
					}}
				/>
			</DialogContent>
			<p className="mx-8 text-red-600">{error || authError}</p>
			<DialogActions>
				<Button variant="outlined" type="submit">
					{buttonText}
				</Button>
			</DialogActions>
		</form>
	);
};
