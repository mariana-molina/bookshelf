import { Button } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { DiscoverBooksScreen } from './screens/DiscoverBooksScreen';
import { BookScreen } from './screens/BookScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';

type AuthenthicatedProps = {
	user: any;
	logout: () => void;
};

const buttonStyle = {
	margin: '10px',
	border: '1px solid blue',
	'&:hover': {
		backgroundColor: 'blue',
		color: 'white',
	},
};

export const Authenticated = ({ user, logout }: AuthenthicatedProps) => {
	return (
		<div>
			<div className="flex row justify-end">
				<p>{user.displayName === undefined ? 'Hi there!' : user.displayName}</p>
				<Button sx={buttonStyle} onClick={logout}>
					Log out
				</Button>
			</div>
			<div>
				<div>
					<Nav />
				</div>
				<main>
					<AppRoutes user={user} />
				</main>
			</div>
		</div>
	);
};

const NavLink = (props: any) => {
	return (
		<Link
			// css={{
			//   display: 'block',
			//   padding: '8px 15px 8px 10px',
			//   margin: '5px 0',
			//   width: '100%',
			//   height: '100%',
			//   color: colors.text,
			//   borderRadius: '2px',
			//   borderLeft: '5px solid transparent',
			//   ':hover': {
			//     color: colors.indigo,
			//     textDecoration: 'none',
			//     background: colors.gray10,
			//   },
			// }}
			{...props}
		/>
	);
};

const Nav = () => {
	return (
		<nav
		// css={{
		//   position: 'sticky',
		//   top: '4px',
		//   padding: '1em 1.5em',
		//   border: `1px solid ${colors.gray10}`,
		//   borderRadius: '3px',
		//   [mq.small]: {
		//     position: 'static',
		//     top: 'auto',
		//   },
		// }}
		>
			<ul
			// css={{
			//   listStyle: 'none',
			//   padding: '0',
			// }}
			>
				<li>
					<NavLink to="/discover">Discover</NavLink>
				</li>
			</ul>
		</nav>
	);
};

const AppRoutes = ({ user }: any) => {
	return (
		<Routes>
			<Route path="/discover" element={<DiscoverBooksScreen user={user} />} />
			<Route path="/book/:bookId" element={<BookScreen user={user} />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	);
};
