import { TextField, DialogContent, DialogActions } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { UserObj } from 'types';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type LogingFormProps = {
	onSubmit: (data: UserObj) => void;
	buttonText: string;
};

export const LoginForm = ({ onSubmit, buttonText }: LogingFormProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function handleSubmit(event: SyntheticEvent) {
		event.preventDefault();
		onSubmit({
			email,
			password,
		});
	}

	const CircularIndeterminate = () => {
		return (
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			<DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
				<TextField
					label="User name"
					autoFocus
					id="username"
					value={email}
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
					sx={{
						margin: '10px',
					}}
				/>
			</DialogContent>
			<DialogActions>
				<Button variant="outlined" type="submit">
					{buttonText}
				</Button>
				<CircularIndeterminate />
			</DialogActions>
		</form>
	);
};
