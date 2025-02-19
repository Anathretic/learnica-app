import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FormSliceModel } from '../../models/reduxSlices.model';

const initialState: FormSliceModel = {
	isLoading: false,
	errorValue: '',
	buttonText: 'Wyślij',
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setErrorValue: (state, action: PayloadAction<string>) => {
			state.errorValue = action.payload;
		},
		setButtonText: (state, action: PayloadAction<string>) => {
			state.buttonText = action.payload;
		},
	},
});

export const { setIsLoading, setErrorValue, setButtonText } = formSlice.actions;

export const getFormInitialValues = (state: RootState) => state.formReduxStore;

export default formSlice;
