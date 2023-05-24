import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const CircularIndeterminate = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
};

export const FullPageSpinner = () => {
	return (
		<div className="flex column text-6xl items-center justify-center h-screen">
			<CircularIndeterminate />
		</div>
	);
};
