import { Button } from '@mui/material';
import { Routes, Route, Link, useMatch, useLocation } from 'react-router-dom';
import { DiscoverBooksScreen } from './screens/DiscoverBooksScreen';
import { BookScreen } from './screens/BookScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { buttonStyle, linkStyle } from 'styles';

type AuthenthicatedProps = {
	user: any;
	logout: () => void;
};

export const Authenticated = ({ user, logout }: AuthenthicatedProps) => {
	const extractUserEmail = (email: string) => {
		const regex = /^([^@]+)/g;
		const matches = email.match(regex);
		if (matches) {
			return matches[0];
		}
		return null;
	};
	return (
		<div>
			<div className="flex row justify-end">
				<p>
					{user === undefined ? 'Hi there!' : `Hi ${extractUserEmail(user)}`}
				</p>
				<Button sx={buttonStyle} onClick={logout}>
					Log out
				</Button>
			</div>
			<div
				style={{
					margin: '0 auto',
					padding: '4em 2em',
					maxWidth: '840px',
					width: '100%',
					display: 'grid',
					gridGap: '1em',
					gridTemplateColumns: '1fr 3fr',
				}}
			>
				<div style={{ position: 'relative' }}>
					<Nav />
				</div>
				<main style={{ width: '100%' }}>
					<AppRoutes user={user} />
				</main>
			</div>
		</div>
	);
};

const NavLink = ({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) => {
	const location = useLocation();
	const isActive = location.pathname === to;
	const linkClassName = isActive
		? 'border-l-5 border-l-2 border-l-indigo bg-gray10 hover:bg-gray10'
		: '';
	return (
		<Link to={to} className={`${linkStyle} ${linkClassName}`}>
			{children}
		</Link>
	);
};

const Nav = () => {
	return (
		<nav className="sticky top-4 py-4 px-6 border border-solid border-gray10 rounded">
			<ul className="list-none p-0">
				<li>
					<NavLink to="/">Discover</NavLink>
				</li>
				<li>
					<NavLink to="/wishlist">Read List</NavLink>
				</li>
			</ul>
		</nav>
	);
};

const AppRoutes = ({ user }: any) => {
	return (
		<Routes>
			<Route path="/" element={<DiscoverBooksScreen user={user} />} />
			<Route path="/wishlist" element={<BookScreen user={user} />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	);
};
