export type UserObj = {
	userName: string;
	password: string;
};

export type Book = {
	id: string;
	searchInfo?: { textSnippet: string };
	volumeInfo: {
		title: string;
		authors: string[];
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		};
		pageCount: number;
		publishedDate: string;
		description?: string;
	};
};
