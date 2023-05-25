import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDWldAolBfpGx9P0FV2KbN-gC_VCip5wlU',
	authDomain: 'bookshelf-940ac.firebaseapp.com',
	projectId: 'bookshelf-940ac',
	storageBucket: 'bookshelf-940ac.appspot.com',
	messagingSenderId: '398034896177',
	appId: '1:398034896177:web:a6fdbc5ee9bb309a4e5c10',
	measurementId: 'G-8211BH445M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

//ADD DOC

export { auth, provider, db };
