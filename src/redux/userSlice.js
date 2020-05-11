import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
	},
	reducers: {
		SET_CURRENT_USER: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});
export const { SET_CURRENT_USER } = userSlice.actions;
export default userSlice.reducer;
