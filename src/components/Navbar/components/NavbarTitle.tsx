import { useEffect } from 'react';
import { NavbarTitleModel } from '../../../models/navbar.model';

import BlueLogo from '../../../images/logo/blue-logo.svg';

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
				<img src={BlueLogo} alt='Logo przenoszące na początek strony' />
			</div>
		</div>
	);
};
