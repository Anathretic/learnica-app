import { useEffect } from 'react';
import { NavbarTitleModel } from '../../../models/navbar.model';

export const NavbarTitle: React.FC<NavbarTitleModel> = ({ divRef }) => {
	const scrollToTop = () => {
		const { current } = divRef;

		if (current !== null) {
			current.scrollIntoView({ behavior: 'smooth' });
		}

		if (window.location.hash) {
			window.history.replaceState('', document.title, window.location.pathname);
		}
	};

	useEffect(() => scrollToTop, []);

	return (
		<div className='navbar__title' onClick={scrollToTop}>
			<div className='navbar__title-box'>
				<h2 className='navbar__title-text'>learnica</h2>
			</div>
		</div>
	);
};
