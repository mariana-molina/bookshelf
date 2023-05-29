import * as React from 'react';
import bookPlaceholderSvg from 'assets/book-placeholder.svg';
import { getDocByEmail } from 'utils/api_books';
import { useState } from 'react';
import { useAsync } from 'utils/hooks';

const loadingBook = {
	title: 'Loading...',
	authors: 'loading...',
	imageLinks: bookPlaceholderSvg,
	publishedDate: 'Loading Publishing',
	textSnippet: 'Loading...',
	loadingBook: true,
};

const BookScreen = ({ user }: any) => {
	// const [data, setData] = useState<{}[]>([]);
	const { data, run } = useAsync('');

	React.useEffect(() => {
		const getAllBooks = async () => {
			// const books = await getDocByEmail(user);
			run(getDocByEmail(user));
			// setData(books);
		};
		getAllBooks();
	}, [user, run]);

	console.log(data);

	return (
		data &&
		data.map((book: any) => {
			return (
				<div>
					<div className="flex flex-col gap-y-2 lg:grid lg:grid-cols-2 lg:gap-14">
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
					</div>
				</div>
			);
		})
	);
};

export { BookScreen };
