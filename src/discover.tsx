import * as React from 'react';
import { BookRow } from './components/BookRow';
import { client } from './utils/api-client';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Book } from 'types';

const DiscoverBooksScreen = () => {
	const [status, setStatus] = React.useState('idle');
	const [data, setData] = React.useState([]);
	const [query, setQuery] = React.useState('');
	const [queried, setQueried] = React.useState(false);

	const isLoading = status === 'loading';
	const isSuccess = status === 'success';

	React.useEffect(() => {
		const getBook = async () => {
			try {
				if (!queried) {
					return;
				}
				setStatus('loading');
				const result = await client(query);
				if (result) {
					setData(result);
					setStatus('success');
				}
			} catch (e) {
				setStatus('rejected');
			}
		};
		getBook();
	}, [query, queried]);

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

	return (
		<div
		// className={{ maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0' }}
		>
			<form onSubmit={handleSearchSubmit}>
				<input
					placeholder="Search books..."
					id="search"
					// css={{ width: '100%' }}
				/>
				<div>
					<label htmlFor="search">
						<button
							type="submit"
							// css={{
							// 	border: '0',
							// 	position: 'relative',
							// 	marginLeft: '-35px',
							// 	background: 'transparent',
							// }}
						>
							{isLoading ? (
								<CircularIndeterminate />
							) : (
								<input aria-label="search" />
							)}
						</button>
					</label>
				</div>
			</form>

			{isSuccess ? (
				data.length > 1 ? (
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
