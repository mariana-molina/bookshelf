import {
	collection,
	getDocs,
	query,
	where,
	addDoc,
	deleteDoc,
	doc,
} from 'firebase/firestore';
import { db } from '../config';

const colRef = collection(db, 'books');

//GET ALL DOCUMENTS FROM BOOKS
getDocs(colRef)
	.then(snapshot => {
		let books = [];
		snapshot.docs.forEach(doc => {
			books.push({ ...doc.data(), id: doc.id });
		});
	})
	.catch(e => console.log(e));

//GET DOC BY USER email
const getDocByEmail = async (email: string): Promise<{}[]> => {
	const querySnapshot = await getDocs(
		query(collection(db, 'books'), where('email', '==', email))
	);
	const data: {}[] = [];
	querySnapshot.forEach((doc: any) => {
		if (doc.data()) data.push(doc.data());
	});
	return data;
};

//ADD DOC
const addBook = async (bookData: any) => {
	const {
		bookId,
		email,
		title,
		authors,
		imageLinks,
		publishedDate,
		textSnippet,
	} = bookData;
	const data = {
		bookId,
		email,
		title,
		authors,
		imageLinks,
		publishedDate,
		textSnippet,
	};
	const docRef = await addDoc(collection(db, 'books'), bookData);
	console.log(docRef, 'Book add to wishlist!');
};

const deleteBook = async (email: string, id: string) => {
	const querySnapshot = await getDocs(
		query(
			collection(db, 'books'),
			where('email', '==', email),
			where('bookId', '==', id)
		)
	);
	const results = querySnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));
	console.log('THIS SHOUKD BE ONE BOOK: ', results);
	results.forEach(async result => {
		const docRef = doc(db, 'books', result.id);
		await deleteDoc(docRef);
		console.log('BOOK DELETED!!!!');
	});
};

export { getDocByEmail, addBook, deleteBook };
