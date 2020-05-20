import { createSlice } from '@reduxjs/toolkit';
import {
	signInWithGoogle,
	createUserProfileDocument,
} from '../firebase/firebase.utils';
import { auth } from 'firebase';
import { clearCart, getCartItemsFireStore } from './cartSlice';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		error: null,
	},
	reducers: {
		SET_CURRENT_USER: (state, action) => {
			state.currentUser = action.payload;
		},
		GOOGLE_SIGNIN_SUCCESS: (state, action) => {
			state.currentUser = action.payload;
			state.error = null;
		},
		EMAIL_SIGNIN_SUCCESS: (state, action) => {
			state.currentUser = action.payload;
			state.error = null;
		},
		SIGNUP_SUCCESS: (state, action) => {
			state.currentUser = action.payload;
			state.error = null;
		},
		GOOGLE_SIGNIN_FALURE: (state, action) => {
			state.currentUser = null;
			state.error = action.payload;
		},
		SIGNUP_FAILURE: (state, action) => {
			state.currentUser = null;
			state.error = action.payload;
		},
		SIGN_OUT: (state) => {
			state.currentUser = null;
			state.error = null;
		},
	},
});
export const {
	SET_CURRENT_USER,
	GOOGLE_SIGNIN_SUCCESS,
	GOOGLE_SIGNIN_FALURE,
	SIGN_OUT,
	SIGNUP_FAILURE,
	SIGNUP_SUCCESS,
	EMAIL_SIGNIN_SUCCESS,
	EMAIL_SIGNIN_FAILURE,
} = userSlice.actions;
export default userSlice.reducer;

export const googleSignin = (history) => async (dispatch) => {
	try {
		const { user } = await signInWithGoogle();
		const docRef = await createUserProfileDocument(user);
		const snap = await docRef.get();
		dispatch(GOOGLE_SIGNIN_SUCCESS({ id: snap.id, ...snap.data() }));
		dispatch(getCartItemsFireStore());
	} catch (err) {
		dispatch(GOOGLE_SIGNIN_FALURE(err.message));
	}
};
export const signOut = () => async (dispatch) => {
	try {
		await auth.signOut;
		dispatch(SIGN_OUT());
		dispatch(clearCart());
	} catch (err) {
		console.log(err.message);
	}
};

export const signinEmailPassword = (credintials) => async (dispatch) => {
	const { email, password } = credintials;

	try {
		const { user } = await auth().signInWithEmailAndPassword(email, password);
		const userRef = await createUserProfileDocument(user);
		const snap = await userRef.get();

		dispatch(
			EMAIL_SIGNIN_SUCCESS({
				id: user.uid,
				displayName: snap.data().displayName,
				email: user.email,
				createdAt: user.createdAt,
			})
		);
		dispatch(getCartItemsFireStore());
	} catch (err) {
		console.log(err.message);
	}
};

export const signUp = (formData) => async (dispatch) => {
	const { displayName, email, password } = formData;
	try {
		const { user } = await auth().createUserWithEmailAndPassword(
			email,
			password
		);
		const userRef = await createUserProfileDocument(user, displayName);
		const snap = await userRef.get();
		dispatch(SIGNUP_SUCCESS({ id: snap.id, ...snap.data() }));
	} catch (err) {
		dispatch(SIGNUP_FAILURE(err.message));
	}
};
