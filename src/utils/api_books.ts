import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
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
	const { email, title, authors, imageLinks, publishedDate, textSnippet } =
		bookData;
	const data = {
		email,
		title,
		authors,
		imageLinks,
		publishedDate,
		textSnippet,
	};
	const docRef = await addDoc(collection(db, 'books'), data);
	console.log(docRef, 'Book add to wishlist!');
};

export { getDocByEmail, addBook };
