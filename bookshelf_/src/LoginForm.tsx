import { SyntheticEvent, useState } from 'react';
import { UserObj } from 'types';

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
			<div>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					value={userName}
					onChange={e => setUserName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<div>
				<button type="submit">{buttonText}</button>
			</div>
		</form>
	);
};
