import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ErrorPopupModel } from '../../models/reduxSlices.model';

const initialState: ErrorPopupModel = {
	value: '',
};

const errorPopupSlice = createSlice({
	name: 'errorPopup',
	initialState,
	reducers: {
		setPopupErrorValue: (state, action) => {
			state.value = action.payload;
		},
		clearPopupErrorValue: state => {
			state.value = '';
		},
	},
});

export const { setPopupErrorValue, clearPopupErrorValue } = errorPopupSlice.actions;

export const getInitialErrorPopupValue = (state: RootState) => state.errorPopupReduxStore.value;

export default errorPopupSlice;
