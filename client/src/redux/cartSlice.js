import { createSlice } from '@reduxjs/toolkit';
import { addItem } from '../utils';

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
		addToCart: (state, action) => {
			const items = addItem(action.payload, state.cartItems);
			state.cartItems = [...items];
			persist(state.cartItems);
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
			persist(state.cartItems);
		},
		itemIncrement: (state, action) => {
			state.cartItems = state.cartItems.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			persist(state.cartItems);
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
		},
	},
});
export const {
	toggleCartHidden,
	addToCart,
	removeItem,
	itemIncrement,
	itemDecrement,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
