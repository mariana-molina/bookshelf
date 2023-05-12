import { Book } from 'types';

const BookRow = ({ book }: any) => {
	const { title, authors, imageLinks, publishedDate } = book.volumeInfo;

	const id = `book-row-book-${book.id}`;

	return (
		<div
			className={'flex align-center my-4 border-black border-2 border-solid'}
		>
			<div>
				<img src={imageLinks.thumbnail} alt={`${title} book cover`} />
			</div>
			<div className={'flex-1'}>
				<div className={'flex justify-between'}>
					<div className={'flex'}>
						<h2 id={id} className={' text-lg m-0'}>
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
				<small className={'whitespace-break-spaces block'}>
					{book.searchInfo ? (
						<p>{book.searchInfo.textSnippet}</p>
					) : (
						'No description available'
					)}
				</small>
			</div>
		</div>
	);
};

export { BookRow };
