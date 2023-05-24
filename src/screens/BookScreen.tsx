import * as React from 'react';
import { useParams } from 'react-router-dom';
import { client } from 'utils/api-client';
import { useAsync } from 'utils/hooks';
import bookPlaceholderSvg from 'assets/book-placeholder.svg';

const loadingBook = {
	title: 'Loading...',
	author: 'loading...',
	coverImageUrl: bookPlaceholderSvg,
	publisher: 'Loading Publishing',
	synopsis: 'Loading...',
	loadingBook: true,
};

const BookScreen = ({ book, user }: any) => {
	const { bookId } = useParams();
	const { authors, imageLinks, publishedDate } = book.volumeInfo ?? loadingBook;

	return <div>BOOK HERE</div>;
	// (
	// 	<div>
	// 		<div
	// 		// className={
	// 		//   display: 'grid',
	// 		//   gridTemplateColumns: '1fr 2fr',
	// 		//   gridGap: '2em',
	// 		//   marginBottom: '1em',
	// 		//   [mq.small]: {
	// 		//     display: 'flex',
	// 		//     flexDirection: 'column',
	// 		//   },
	// 		// }
	// 		>
	// 			<img
	// 				src={imageLinks}
	// 				alt={`${title} book cover`}
	// 				// css={{width: '100%', maxWidth: '14rem'}}
	// 			/>
	// 			<div>
	// 				<div
	// 				// css={{display: 'flex', position: 'relative'}}
	// 				>
	// 					<div
	// 					//  css={{flex: 1, justifyContent: 'space-between'}}
	// 					>
	// 						<h1>{title}</h1>
	// 						<div>
	// 							<i>{authors}</i>
	// 							<span
	// 							// css={{marginRight: 6, marginLeft: 6}}
	// 							>
	// 								|
	// 							</span>
	// 							<i>{publishedDate}</i>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<br />
	// 				{data.book.searchInfo ? (
	// 					<p>{data.book.searchInfo.textSnippet}</p>
	// 				) : (
	// 					'No description available'
	// 				)}
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

export { BookScreen };
