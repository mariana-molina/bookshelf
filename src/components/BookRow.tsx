import { Book } from 'types';

const BookRow = ({ book }: any) => {
	const { title, authors, imageLinks, publishedDate } = book.volumeInfo;

	const id = `book-row-book-${book.id}`;

	return (
		<div className={'flex align-center justify-end relative'}>
			<div
				aria-labelledby={id}
				// className={
				//   minHeight: 270,
				//   flexGrow: 2,
				//   display: 'grid',
				//   gridTemplateColumns: '140px 1fr',
				//   gridGap: 20,
				//   border: `1px solid ${colors.gray20}`,
				//   color: colors.text,
				//   padding: '1.25em',
				//   borderRadius: '3px',
				//   ':hover,:focus': {
				//     textDecoration: 'none',
				//     boxShadow: '0 5px 15px -5px rgba(0,0,0,.08)',
				//     color: 'inherit',
				//   },
				// }
			>
				<div
				// css={{
				//   width: 140,
				//   [mq.small]: {
				//     width: 100,
				//   },
				// }}
				>
					<img
						src={imageLinks.thumbnail}
						alt={`${title} book cover`}
						// css={{maxHeight: '100%', width: '100%'}}
					/>
				</div>
				<div
				// css={{flex: 1}}
				>
					<div className={'flex justify-between'}>
						<div className={'flex'}>
							<h2
								id={id}
								// css={{
								//   fontSize: '1.25em',
								//   margin: '0',
								//   color: colors.indigo,
								// }}
							>
								{title}
							</h2>
						</div>
						<div
						// css={{marginLeft: 10}}
						>
							<div
							// css={{
							//   marginTop: '0.4em',
							//   fontStyle: 'italic',
							//   fontSize: '0.85em',
							// }}
							>
								{authors.map((author: string) => author)}
							</div>
							<small>{publishedDate}</small>
						</div>
					</div>
					<small
					// css={{whiteSpace: 'break-spaces', display: 'block'}}
					>
						{book.searchInfo ? (
							<p>{book.searchInfo.textSnippet}</p>
						) : (
							'No description available'
						)}
					</small>
				</div>
			</div>
		</div>
	);
};

export { BookRow };
