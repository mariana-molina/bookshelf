import { Book } from 'types';

import AddIcon from '@mui/icons-material/Add';
import he from 'he';
import { AddButtonStyled } from 'styles';
import { addBook } from 'utils/api_books';

const BookRow = ({ user, book }: any) => {
	const { title, authors, imageLinks, publishedDate } = book.volumeInfo;
	const id = `book-row-book-${book.id}`;

	const addToWishlist = async () => {
		const bookData = {
			email: user,
			title: book.volumeInfo.title ? book.volumeInfo.title : 'NA',
			authors: book.volumeInfo.authors ? book.volumeInfo.authors : 'NA',
			imageLinks: book.volumeInfo.imageLinks.thumbnail
				? book.volumeInfo.imageLinks.thumbnail
				: 'NA',
			publishedDate: book.volumeInfo.publishedDate
				? book.volumeInfo.publishedDate
				: 'NA',
			textSnippet: book.searchInfo ? book.searchInfo.textSnippet : 'NA',
		};
		await addBook(bookData);
	};

	return (
		<div className={' my-4 border-2'}>
			<div>
				<div className={'flex row align-center'}>
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
									{authors && authors.map((author: string) => author)}
								</div>
								<small>{publishedDate}</small>
							</div>
						</div>
						{/* {description} */}
						<small className={'whitespace-break-spaces block'}>
							{book.searchInfo ? (
								<p>{he.decode(book.searchInfo.textSnippet)}</p>
							) : (
								'No description available'
							)}
						</small>
						<div className="flex row mt-5 justify-end ">
							<AddButtonStyled onClick={addToWishlist}>
								<p className="wx-100 mr-2">Add to read list</p>
								<AddIcon
									sx={{
										borderRadius: '150px',
										'&:hover': {
											backgroundColor: 'rgb(84, 141, 215)',
											color: 'white',
											transition: 'ease-in-out',
											boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
										},
									}}
								/>
							</AddButtonStyled>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { BookRow };
