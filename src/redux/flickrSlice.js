import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlickr = createAsyncThunk('flickr/requestFlickr', async (opt) => {
	const base = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	let url = '';
	const key = 'ae5dbef0587895ed38171fcda4afb648';
	const method_user = 'flickr.people.getPhotos';
	const method_search = 'flickr.photos.search';
	const method_photosets = 'flickr.photosets.getPhotos';
	const per_page = 25;
	if (opt.type === 'user') {
		url = `${base}&method=${method_user}&api_key=${key}&per_page=${per_page}&user_id=${opt.user}`;
	}
	if (opt.type === 'search') {
		url = `${base}&method=${method_search}&api_key=${key}&per_page=${per_page}&tags=${opt.tags}`;
	}
	if (opt.type === 'photosets') {
		url = `${base}&method=${method_photosets}&api_key=${key}&per_page=${per_page}&user_id=${opt.user}&photoset_id=${opt.photoset}`;
	}

	const response = await axios.get(url);
	if (opt.type === 'photosets') {
		return response.data.photoset.photo;
	} else {
		if (response.data.photos.photo.length === 0) {
			frame.current.classList.add('on');
			setLoading(false);
			return alert('해당  검색어의 결과 이미지가 없습니다.');
		}
		return response.data.photos.photo;
	}

	// const result = await axios.get(url);
	// if (opt.type === 'photosets') {
	//   setItems(result.data.photoset.photo);
	// } else {
	//   if (result.data.photos.photo.length === 0) {
	//     frame.current.classList.add('on');
	//     setLoading(false);
	//     return alert('해당  검색어의 결과 이미지가 없습니다.');
	//   }
	//   setItems(result.data.photos.photo);
	// }
});

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchFlickr.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default flickrSlice.reducer;
