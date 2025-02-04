import { combineReducers } from 'redux';
import formSlice from './formReduxSlice/FormSlice';

export const rootReducer = combineReducers({
	formReduxStore: formSlice.reducer,
});
