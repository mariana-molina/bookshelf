import * as React from 'react';
import { BookRow } from './components/BookRow';
import { client } from './utils/api-client';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useAsync } from './utils/hooks';

const DiscoverBooksScreen = () => {
	const { data, error, run, isLoading, isError, isSuccess, reset } =
		useAsync('');
	const [query, setQuery] = React.useState('');
	const [queried, setQueried] = React.useState(false);

	React.useEffect(() => {
		const getBook = async () => {
			if (!queried) {
				return;
			}
			run(client(query));
		};
		getBook();
	}, [query, queried, run]);

	const handleSearchSubmit = (event: any) => {
		event.preventDefault();
		setQueried(true);
		setQuery(event.target.elements.search.value);
	};

	const CircularIndeterminate = () => {
		return (
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		);
	};

	const backToSearch = () => {
		console.log('is it doing something?');
		reset();
		setQueried(false);
		setQuery('');
	};

	return (
		<div className={'max-w-screen-md m-auto w-90vw py-40 px-0'}>
			<form className="flex row" onSubmit={handleSearchSubmit}>
				<input placeholder="Search books..." id="search" className={'w-full'} />
				<div>
					<label htmlFor="search">
						<button type="submit" className={'border-0 bg-transparent'}>
							{isLoading ? (
								<CircularIndeterminate />
							) : isError ? (
								<CloseIcon
									aria-label="error"
									onClick={backToSearch}
								></CloseIcon>
							) : (
								<SearchIcon aria-label="search" />
							)}
						</button>
					</label>
				</div>
			</form>

			{isError && (
				<div>
					<pre>{error.message}</pre>
				</div>
			)}

			{isSuccess ? (
				data ? (
					<ul>
						{data?.map((book: any) => (
							<li key={book.id} aria-label={book.volumeInfo.title}>
								<BookRow key={book.id} book={book} />
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
