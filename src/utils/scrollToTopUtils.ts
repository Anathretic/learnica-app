import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const root = document.querySelector('#root');
		root?.scrollIntoView({ behavior: 'smooth' });
	}, [pathname]);

	return null;
};
