import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const buttonStyle = {
	margin: '10px',
	'&:hover': {
		backgroundColor: 'rgb(52, 112, 224)',
		color: 'white',
	},
};

const AddButtonStyled = styled(Button)({
	padding: '0px',
	border: 'transparent',
	'&:hover': {
		backgroundColor: 'transparent',
	},
});

const linkStyle = {
	display: 'block',
	padding: '8px 15px 8px 10px',
	margin: '5px 0',
	width: '100%',
	height: '100%',
	color: 'black',
	borderRadius: '2px',
	borderLeft: '5px solid transparent',
	':hover': {
		color: 'indigo',
		textDecoration: 'none',
		background: 'gray',
	},
};

export { linkStyle, AddButtonStyled, buttonStyle };
