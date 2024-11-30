import { combineReducers } from 'redux';
import counterRedux from './counterReduxSlice/counterRedux';

export const rootReducer = combineReducers({
	counter: counterRedux.reducer,
});
