import { Link } from 'react-router-dom';
import { linkStyle2 } from 'styles';

const NotFoundScreen = () => {
	return (
		<div className="h-full grid align-center justify-center">
			<div>
				Sorry... nothing here.{' '}
				<Link style={linkStyle2} to="/discover">
					Go home
				</Link>
			</div>
		</div>
	);
};

export { NotFoundScreen };
