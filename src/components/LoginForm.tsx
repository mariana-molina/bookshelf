import { TextField, DialogContent } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { UserObj } from 'types';
import Button from '@mui/material/Button';

type LogingFormProps = {
	onSubmit: (data: UserObj) => void;
	buttonText: string;
};

export const LoginForm = ({ onSubmit, buttonText }: LogingFormProps) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	function handleSubmit(event: SyntheticEvent) {
		event.preventDefault();
		onSubmit({
			userName,
			password,
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<DialogContent>
				<TextField
					label="User name"
					autoFocus
					id="username"
					value={userName}
					onChange={e => setUserName(e.target.value)}
				/>
				<div>
					<TextField
						label="Password"
						id="password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
			</DialogContent>
			<Button variant="outlined" type="submit">
				{buttonText}
			</Button>
		</form>
	);
};
