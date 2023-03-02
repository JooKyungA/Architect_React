import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let num = 0;

export const fetchFlickr = createAsyncThunk('flickr/requestFlickr', async (opt) => {
	const base = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	let url = '';
	const key = 'ae5dbef0587895ed38171fcda4afb648';
	const method_search = 'flickr.photos.search';
	const method_photosets = 'flickr.photosets.getPhotos';
	const per_page = 25;
	if (opt.type === 'search') {
		url = `${base}&method=${method_search}&api_key=${key}&per_page=${per_page}&tags=${opt.tags}`;
	}
	if (opt.type === 'photosets') {
		url = `${base}&method=${method_photosets}&api_key=${key}&per_page=${per_page}&user_id=${opt.user}&photoset_id=${opt.photoset}`;
	}

	const response = await axios.get(url);
	if (opt.type === 'photosets') {
		num = opt.num;
		return response.data.photoset.photo;
	} else {
		num = opt.type;
		return response.data.photos.photo;
	}
});

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
		photosetNum: 0,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.photosetNum = num;
		},
		[fetchFlickr.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default flickrSlice.reducer;
