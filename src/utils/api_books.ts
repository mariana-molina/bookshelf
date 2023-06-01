import {
	collection,
	getDocs,
	query,
	where,
	addDoc,
	deleteDoc,
	doc,
	updateDoc,
	arrayUnion,
} from 'firebase/firestore';
import { db } from '../config';
interface BookDataProps {
	bookId: string;
	email: string[];
	title: string;
	authors: string[];
	imageLinks: string;
	publishedDate: string;
	textSnippet: string;
}
interface ExtendedBookDataProps extends BookDataProps {
	docId: string;
}

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
	return data;
};

const getDocById = async (id: string): Promise<ExtendedBookDataProps[]> => {
	const querySnapshot = await getDocs(query(colRef, where('bookId', '==', id)));
	const data: ExtendedBookDataProps[] = [];
	querySnapshot.forEach((doc: any) => {
		if (doc.data()) {
			const info = doc.data();
			const bookInfo: BookDataProps = info;
			const docId: any = { docId: doc.id };
			const fullBook = { ...bookInfo, ...docId };
			data.push(fullBook);
		}
	});
	return data;
};

//ADD DOC
const addBook = async (bookData: BookDataProps, userEmail: string) => {
	try {
		const { bookId } = bookData;
		const book = await getDocById(bookId);
		console.log(book.length);
		if (book.length > 0) {
			const { email, docId } = book[0];
			const filteredUser = email.find((user: string) => user === userEmail);
			if (!filteredUser) {
				const docRef = doc(db, 'books', docId);
				await updateDoc(docRef, { email: arrayUnion(userEmail) });
				console.log('USER ADDED SUCCESSFULLY TO EMAIL LIST!');
			}
		} else {
			const docRef = await addDoc(colRef, bookData);
			console.log(docRef, 'Book added to wishlist!');
		}
	} catch (e) {
		console.log('There was an error:', e);
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
