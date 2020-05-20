import { createSlice } from '@reduxjs/toolkit';
import { addItem } from '../utils';
import { getUserCartRef } from '../firebase/firebase.utils';

//get cart items from firestore

//persist state in local storage
let items = localStorage.getItem('cartItems');
const persist = (data) =>
	localStorage.setItem('cartItems', JSON.stringify(data));
export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartIsHidden: false,

		cartItems: items ? JSON.parse(items) : [],
	},
	reducers: {
		toggleCartHidden: (state) => {
			state.cartIsHidden = !state.cartIsHidden;
		},
		getUsersCartFirestore: (state, action) => {
			state.cartItems = action.payload;
		},
		addToCart: (state, action) => {
			const items = addItem(action.payload, state.cartItems);
			state.cartItems = [...items];
			persist(state.cartItems);
			setCartItemsFirestore(state.cartItems);
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
			persist(state.cartItems);
			setCartItemsFirestore(state.cartItems);
		},
		itemIncrement: (state, action) => {
			state.cartItems = state.cartItems.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			persist(state.cartItems);
			setCartItemsFirestore(state.cartItems);
		},
		clearCart: (state) => {
			state.cartItems = [];
		},
		itemDecrement: (state, action) => {
			const exist = state.cartItems.find(
				(item) => item.id === action.payload && item.quantity === 1
			);
			if (exist) {
				state.cartItems = state.cartItems.filter(
					(item) => item.id !== exist.id
				);
				persist(state.cartItems);
			} else {
			}

			state.cartItems = state.cartItems.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity - 1 }
					: item
			);
			persist(state.cartItems);
			setCartItemsFirestore(state.cartItems);
		},
	},
});

export const setCartItemsFirestore = async (cartItems) => {
	const cartDocRef = await getUserCartRef();
	if (cartDocRef) {
		await cartDocRef.update({ cartItems });
	}
};
export const getCartItemsFireStore = () => async (dispatch) => {
	const cartDocRef = await getUserCartRef();
	if (cartDocRef) {
		const snapshot = await cartDocRef.get();
		dispatch(getUsersCartFirestore(snapshot.data().cartItems));
	} else {
		return [];
	}
};

export const {
	toggleCartHidden,
	getUsersCartFirestore,
	addToCart,
	removeItem,
	itemIncrement,
	itemDecrement,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
