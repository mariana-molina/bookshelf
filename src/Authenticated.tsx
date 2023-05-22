import { DiscoverBooksScreen } from 'discover';
import React from 'react';

type AuthenthicatedProps = {
	user: any;
	logout: () => void;
};

export const Authenticated = ({ user, logout }: AuthenthicatedProps) => {
	return (
		<div>
			<button>Logout</button>
			<DiscoverBooksScreen />
		</div>
	);
};
