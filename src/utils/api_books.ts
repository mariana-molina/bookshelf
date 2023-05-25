import {
	QuerySnapshot,
	collection,
	getDocs,
	query,
	where,
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

//GET DOC BY USER ID
const fetchBooks = async (email: string) => {
	const querySnapshot = await getDocs(
		query(collection(db, 'books'), where('email', '==', email))
	);
	querySnapshot.forEach(doc => {
		console.log(doc);
	});
};
//ADD DOC BY USER ID

export { fetchBooks };
