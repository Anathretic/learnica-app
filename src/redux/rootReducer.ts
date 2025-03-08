import { combineReducers } from 'redux';
import blogPopupSlice from './blogPopupReduxSlice/blogPopupSlice';
import formSlice from './formReduxSlice/formSlice';
import errorPopupSlice from './errorPopupReduxSlice/errorPopupSlice';

export const rootReducer = combineReducers({
	blogReduxStore: blogPopupSlice.reducer,
	formReduxStore: formSlice.reducer,
	errorPopupReduxStore: errorPopupSlice.reducer,
});
