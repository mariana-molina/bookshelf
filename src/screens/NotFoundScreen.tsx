import { Link } from 'react-router-dom';

// LINK STYLE:
// const Link = styled(RouterLink)({
//   color: colors.indigo,
//   ':hover': {
//     color: colors.indigoDarken10,
//     textDecoration: 'underline',
//   },
// })

const NotFoundScreen = () => {
	return (
		<div
		// css={{
		//   height: '100%',
		//   display: 'grid',
		//   alignItems: 'center',
		//   justifyContent: 'center',
		// }}
		>
			<div>
				Sorry... nothing here. <Link to="/discover">Go home</Link>
			</div>
		</div>
	);
};

export { NotFoundScreen };
