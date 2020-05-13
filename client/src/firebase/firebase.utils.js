import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//set up firebase google auth
const firebaseConfig = {
	apiKey: 'AIzaSyAxis61vKIv3vTMR8AMAjWwn2QOrnYIwP4',
	authDomain: 'crwn-6609a.firebaseapp.com',
	databaseURL: 'https://crwn-6609a.firebaseio.com',
	projectId: 'crwn-6609a',
	storageBucket: 'crwn-6609a.appspot.com',
	messagingSenderId: '706748399415',
	appId: '1:706748399415:web:c1d4e95630d994ce4c64b2',
	measurementId: 'G-FGNMY3NYXL',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () =>
	await auth.signInWithPopup(googleProvider);

export default firebase;

export const createUserProfileDocument = async (user, additionalData) => {
	if (!user) return;
	const docRef = firestore.doc(`users/${user.uid}`);
	const snapShot = await docRef.get();

	if (!snapShot.exists) {
		const { email } = user;
		const { displayName } = user;

		const createdAt = new Date().toLocaleString();

		try {
			await docRef.set({
				email,
				createdAt,
				displayName: displayName || additionalData,
			});
		} catch (err) {
			console.log(err);
		}
	}
	return docRef;
};
export const addcollectionAndDocuments = async (
	collectionKey,
	collectionToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	let batch = firestore.batch();
	collectionToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};
export const getref = (collectionKey) => firestore.collection(collectionKey);
