import { combineReducers } from 'redux';
import formSlice from './formReduxSlice/formSlice';

export const rootReducer = combineReducers({
	formReduxStore: formSlice.reducer,
});
