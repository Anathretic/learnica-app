import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { decrement, getInitialCounterValue, increment } from './redux/counterReduxSlice/counterRedux';

const App: React.FC = () => {
	const count = useAppSelector(getInitialCounterValue);
	const dispatch = useAppDispatch();

	return (
		<main>
			<section>
				<h1>I'll teach you something!</h1>
				<div>
					<p>
						Counter: <span>{count}</span>
					</p>
					<button onClick={() => dispatch(increment())}>Increment</button>
					<button onClick={() => dispatch(decrement())}>Decrement</button>
				</div>
			</section>
		</main>
	);
};

export default App;
