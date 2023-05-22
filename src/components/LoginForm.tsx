import { TextField, DialogContent, DialogActions } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { UserObj } from 'types';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type LogingFormProps = {
	onSubmit: (data: UserObj) => void;
	buttonText: string;
	authError: any;
};

export const LoginForm = ({
	onSubmit,
	buttonText,
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

	// const CircularIndeterminate = () => {
	// 	return (
	// 		<Box sx={{ display: 'flex' }}>
	// 			<CircularProgress />
	// 		</Box>
	// 	);
	// };

	return (
		<form onSubmit={handleSubmit}>
			<DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
				<TextField
					label="email"
					autoFocus
					id="email"
					type="email"
					value={email}
					onFocus={() => setError('')}
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
					onFocus={() => setError('')}
					sx={{
						margin: '10px',
					}}
				/>
			</DialogContent>
			<p className="mx-5 text-red-600">{error || authError}</p>
			<DialogActions>
				<Button variant="outlined" type="submit">
					{buttonText}
				</Button>
				{/* <CircularIndeterminate /> */}
			</DialogActions>
		</form>
	);
};
