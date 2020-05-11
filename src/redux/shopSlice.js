import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	collections: [],
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState: initialState,
	reducers: {
		setShopData: (state, action) => {
			state.collections = action.payload;
		},
	},
});

export default shopSlice.reducer;
export const { setShopData } = shopSlice.actions;
