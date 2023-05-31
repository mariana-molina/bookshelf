import * as React from 'react';
import bookPlaceholderSvg from 'assets/book-placeholder.svg';
import { deleteBook, getDocByEmail } from 'utils/api_books';
import { useState } from 'react';
import { useAsync } from 'utils/hooks';
import { Button } from '@mui/material';

const loadingBook = {
	title: 'Loading...',
	authors: 'loading...',
	imageLinks: bookPlaceholderSvg,
	publishedDate: 'Loading Publishing',
	textSnippet: 'Loading...',
	loadingBook: true,
};

const BookScreen = ({ user }: any) => {
	const { data, run } = useAsync('');

	const handleDelete = async () => {
		await deleteBook(user);
	};

	React.useEffect(() => {
		const getAllBooks = async () => {
			run(getDocByEmail(user));
		};
		getAllBooks();
	}, [user, run]);

	return (
		data &&
		data.map((book: any) => {
			return (
				<div>
					<div className="flex flex-col gap-y-2 lg:mb-50 lg:grid lg:grid-cols-2 lg:gap-14">
						<img
							className="w-full max-w-xs"
							alt={book.title + 'book cover'}
							src={book.imageLinks}
						/>
						<div>
							<div className="flex relative">
								<div className="flex-1 justify-between">
									<h1> {book.title}</h1>
									<div>
										<i>{book.authors}</i>
										<span className="mx-6">|</span>
										<i>{book.publishedDate}</i>
									</div>
								</div>
							</div>
							<br />
							<p>{book.textSnippet}</p>
						</div>
						<Button onClick={handleDelete}>Delete</Button>
					</div>
				</div>
			);
		})
	);
};

export { BookScreen };
