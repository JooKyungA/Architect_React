import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchYoutube = createAsyncThunk('youtube/requestYoutube', async () => {
	const key = 'AIzaSyCe4VTdOeeczNpK2P90-h1K2ZmPWygTVOY';
	const playlistId = 'PLB11APmWdapRtpUvss55ipqwUpcIxj3Eq';
	const num = 9;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;
	const response = await axios.get(url);
	return response.data.items;
});

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});
export default youtubeSlice.reducer;
