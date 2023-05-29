import * as React from 'react';
import { BookRow } from '../components/BookRow';
import { client } from '../utils/api-client';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useAsync } from '../utils/hooks';
import { TextField } from '@mui/material';

const DiscoverBooksScreen = ({ user }: any) => {
	const { data, error, run, isLoading, isError, isSuccess } = useAsync('');
	const [query, setQuery] = React.useState('');
	const [queried, setQueried] = React.useState(false);

	React.useEffect(() => {
		const getBook = async () => {
			if (!queried) {
				return;
			}
			run(client(query, { token: user.accessToken }));
		};
		getBook();
	}, [query, queried, run, user.accessToken]);

	const handleSearchSubmit = (event: any) => {
		event.preventDefault();
		setQueried(true);
		setQuery(event.target.elements.search.value);
	};

	const CircularIndeterminate = () => {
		return (
			<Box
				sx={{ display: 'flex', width: '40px', height: '40px', margin: '8px' }}
			>
				<CircularProgress />
			</Box>
		);
	};

	return (
		<div className={'max-w-screen-md m-auto w-90vw py-20 px-5'}>
			<form className="flex row  items-center" onSubmit={handleSearchSubmit}>
				<TextField
					placeholder="Search books..."
					id="search"
					sx={{ width: '100%' }}
					onFocus={() => {
						setQuery('');
						setQueried(false);
					}}
				/>
				<div>
					<label htmlFor="search">
						<button type="submit" className={'border-0 bg-transparent'}>
							{isLoading ? (
								<CircularIndeterminate />
							) : isError ? (
								<CloseIcon
									aria-label="error"
									sx={{
										width: '40px',
										height: '40px',
										margin: '8px',
									}}
								></CloseIcon>
							) : (
								<SearchIcon
									sx={{
										width: '40px',
										height: '40px',
										margin: '8px',
									}}
									aria-label="search"
								/>
							)}
						</button>
					</label>
				</div>
			</form>

			{isError && (
				<div>
					<pre className={'mt-20px'}>{error.message}</pre>
				</div>
			)}

			{isSuccess ? (
				data ? (
					<ul>
						{data?.map((book: any) => (
							<li key={book.id} aria-label={book.volumeInfo.title}>
								<BookRow user={user} key={book.id} book={book} />
							</li>
						))}
					</ul>
				) : (
					<p>No books found. Try another search.</p>
				)
			) : null}
		</div>
	);
};

export { DiscoverBooksScreen };
