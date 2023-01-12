import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	open: false,
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		close: (state) => {
			state.open = false;
		},
		toggle: (state) => {
			state.open = !state.open;
		},
	},
});

export const { toggle, close } = menuSlice.actions;
export default menuSlice.reducer;
