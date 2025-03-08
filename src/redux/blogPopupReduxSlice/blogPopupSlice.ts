import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { BlogPopupSliceModel } from '../../models/reduxSlices.model';

const initialState: BlogPopupSliceModel = {
	showPopup: false,
	slideItemData: undefined,
};

const blogPopupSlice = createSlice({
	name: 'blogPopup',
	initialState,
	reducers: {
		setPopupVisible: (state, action) => {
			state.showPopup = action.payload;
		},
		setSlideItemData: (state, action) => {
			state.slideItemData = action.payload;
		},
	},
});

export const { setPopupVisible, setSlideItemData } = blogPopupSlice.actions;

export const getInitialBlogPopupSliceValue = (state: RootState) => state.blogReduxStore;

export default blogPopupSlice;
