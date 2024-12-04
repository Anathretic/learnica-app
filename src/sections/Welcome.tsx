import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { decrement, getInitialCounterValue, increment } from '../redux/counterReduxSlice/counterRedux';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';

const Welcome: React.FC = () => {
	const count = useAppSelector(getInitialCounterValue);
	const dispatch = useAppDispatch();

	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<section>
			<div>
				<h1>I'll teach you something!</h1>
				<div>
					<p>
						Counter: <span>{count}</span>
					</p>
					<button className='btn' onClick={() => dispatch(increment())}>
						Increment
					</button>
					<button onClick={() => dispatch(decrement())}>Decrement</button>
				</div>
			</div>
			<div>
				<Link to='/login'>Login</Link>
				<br />
				<Link to='/register'>Register</Link>
			</div>
		</section>
	);
};

export default Welcome;
