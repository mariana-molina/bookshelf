import { Link } from 'react-router-dom';
import { Book } from 'types';

const BookRow = ({ book }: any) => {
	const { title, authors, imageLinks, publishedDate } = book.volumeInfo;

	const id = `book-row-book-${book.id}`;

	return (
		<div className={'flex align-center my-4 border-2'}>
			<Link to={`/book/${book.id}`}>
				{/* {image} */}
				<div>
					<img src={imageLinks.thumbnail} alt={`${title} book cover`} />
				</div>
				{/* {All text} */}
				<div className={'flex-1 mx-7 my-5'}>
					{/* {title, author, date} */}
					<div className={'flex justify-between mb-4 items-center'}>
						<div className={'flex'}>
							<h2 id={id} className={'text-xl'}>
								{title}
							</h2>
						</div>
						<div className={'ml-10'}>
							<div className={'mt-1.5 italic text-sm'}>
								{authors.map((author: string) => author)}
							</div>
							<small>{publishedDate}</small>
						</div>
					</div>
					{/* {description} */}
					<small className={'whitespace-break-spaces block'}>
						{book.searchInfo ? (
							<p>{book.searchInfo.textSnippet}</p>
						) : (
							'No description available'
						)}
					</small>
				</div>
			</Link>
		</div>
	);
};

export { BookRow };
