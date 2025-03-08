import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { clearPopupErrorValue, getInitialErrorPopupValue } from '../redux/errorPopupReduxSlice/errorPopupSlice';

const ErrorPopup: React.FC = () => {
	const error = useAppSelector(getInitialErrorPopupValue);
	const dispatch = useAppDispatch();

	const handleButton = () => {
		dispatch(clearPopupErrorValue());
	};

	useEffect(() => {
		document.documentElement.classList.add('scroll-block');
		return () => {
			document.documentElement.classList.remove('scroll-block');
		};
	}, []);

	return (
		<div className='error-popup'>
			<div className='error-popup__box white-gradient'>
				<p className='error-popup__message'>{error}</p>
				<button className='error-popup__button' type='button' onClick={handleButton}>
					Zamknij
				</button>
			</div>
		</div>
	);
};

export default ErrorPopup;
