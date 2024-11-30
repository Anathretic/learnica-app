import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterRedux = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
	},
});

export const { decrement, increment } = counterRedux.actions;

export const getInitialCounterValue = (state: RootState) => state.counter.value;

export default counterRedux;
