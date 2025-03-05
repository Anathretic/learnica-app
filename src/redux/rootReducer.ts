import { combineReducers } from 'redux';
import formSlice from './formReduxSlice/formSlice';
import errorPopupSlice from './errorPopupReduxSlice/errorPopupSlice';

export const rootReducer = combineReducers({
	formReduxStore: formSlice.reducer,
	errorPopupReduxStore: errorPopupSlice.reducer,
});
