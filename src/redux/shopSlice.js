import { createSlice } from '@reduxjs/toolkit';

import { firestore } from '../firebase/firebase.utils';
const initialState = {
	loading: false,
	error: '',
	collections: [],
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState: initialState,
	reducers: {
		FETCH_COLLECTION_START: (state) => {
			state.loading = true;
		},
		FETCH_COLLECTION_SUCCESS: (state, action) => {
			state.loading = false;
			state.collections = action.payload;
			state.error = '';
		},
		FETCH_COLLECTION_FAILURE: (state, action) => {
			state.loading = false;
			state.collections = [];
			state.error = action.payload ? action.payload : 'something went wrong';
		},
	},
});

export default shopSlice.reducer;
export const {
	FETCH_COLLECTION_FAILURE,
	FETCH_COLLECTION_SUCCESS,
	FETCH_COLLECTION_START,
} = shopSlice.actions;

export const setShopData = () => (dispatch) => {
	dispatch(FETCH_COLLECTION_START());
	const colRef = firestore.collection('collections');

	colRef.onSnapshot(
		(snap) => {
			if (!snap.empty) {
				let documents = snap.docs.map((doc) => ({
					id: doc.id,
					routeName: doc.data().title.toLowerCase(),
					...doc.data(),
				}));
				dispatch(FETCH_COLLECTION_SUCCESS(documents));
			} else {
				dispatch(FETCH_COLLECTION_FAILURE('No Documents'));
			}
		},
		(err) => {
			console.log(err.message);

			dispatch(FETCH_COLLECTION_FAILURE(err.message));
		}
	);
};
