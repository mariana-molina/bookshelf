import {
	collection,
	getDocs,
	query,
	where,
	addDoc,
	deleteDoc,
	doc,
	updateDoc,
} from 'firebase/firestore';
import { db } from '../config';

const colRef = collection(db, 'books');

//GET ALL DOCUMENTS FROM BOOKS
const getALLBOOKS = () =>
	getDocs(colRef)
		.then(snapshot => {
			let books = [];
			snapshot.docs.forEach(doc => {
				books.push({ ...doc.data(), id: doc.id });
			});
		})
		.catch(e => console.log(e));

//GET DOCS BY USER email
const getDocByEmail = async (email: string): Promise<BookDataProps[]> => {
	const querySnapshot = await getDocs(
		query(colRef, where('email', 'array-contains', email))
	);
	const data: BookDataProps[] = [];
	querySnapshot.forEach((doc: any) => {
		if (doc.data()) data.push(doc.data());
	});
	console.log('THIS SHOULD BE AN ARRAY OF 2:', data);
	return data;
};
const getDocById = async (id: string): Promise<BookDataProps[]> => {
	const querySnapshot = await getDocs(query(colRef, where('bookId', '==', id)));
	const data: BookDataProps[] = [];
	querySnapshot.forEach((doc: any) => {
		if (doc.data()) data.push(doc.data());
	});
	return data;
};

//ADD DOC
type BookDataProps = {
	bookId: string;
	email: string[];
	title: string;
	authors: string[];
	imageLinks: string;
	publishedDate: string;
	textSnippet: string;
};

const addBook = async (bookData: BookDataProps, userEmail: string) => {
	const { bookId } = bookData;
	const book = await getDocById(bookId);
	console.log('HERE SHOULD BE A BOOK:', book);
	if (book) {
		// 	//check if user is in user[]
		console.log('HERE EMAIL IN LIST:', book[0].email);
		const filteredUser = book[0].email.find(user => user === userEmail);
		if (!filteredUser) {
			// 		//ADD USER TO EMAIL LIST
			const docRef = doc(db, 'books', 'DBrGLz2mML2vN7JBAxic');
			await updateDoc(docRef, { email: userEmail });
			console.log('USER ADDED SUCCESFULLY TO EMAIL LIST!');
		}
	} else {
		const docRef = await addDoc(colRef, bookData);
		console.log(docRef, 'Book add to wishlist!');
	}
};

const deleteBook = async (email: string, id: string) => {
	//THIS WILL BE ONLY TAKE USER FROM EMAIL LIST
	const querySnapshot = await getDocs(
		query(colRef, where('email', '==', email), where('bookId', '==', id))
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
