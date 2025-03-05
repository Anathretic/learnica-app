import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import { NavbarItem } from './components/NavbarItem';
import { LoginIcon } from './components/LoginIcon';
import { navbarItems } from './components/navbarData/navbarItems';
import { NavbarTitle } from './components/NavbarTitle';
import { scrollToTop } from '../../utils/scrollToTopUtils';

export const Navbar: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	const divRef = useRef<HTMLDivElement | null>(null);

	const handleMenuClose = () => {
		setIsAnimating(true);
		setToggleMenu(false);

		setTimeout(() => {
			setIsAnimating(false);
		}, 450);
	};

	const handleAnimationEnd = () => {
		setIsAnimating(false);
	};

	const handleScroll = () => {
		if (window.scrollY > 30) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header ref={divRef}>
			<div className={`navbar ${isScrolled ? 'navbar--is-scrolled' : ''}`}>
				<div className='navbar__container'>
					<NavbarTitle divRef={divRef} />
					{isMobile ? (
						<>
							<HiMenuAlt4 className='navbar__mobile-burger-btn' fontSize={32} onClick={() => setToggleMenu(true)} />
							{(toggleMenu || isAnimating) && (
								<nav className='navbar__mobile'>
									<ul
										onAnimationEnd={handleAnimationEnd}
										className={`navbar__mobile-list ${toggleMenu ? 'animate-slide-in' : 'animate-slide-out'}`}>
										<li className='navbar__mobile-exit-icon'>
											<AiOutlineClose fontSize={28} onClick={handleMenuClose} />
										</li>
										{navbarItems.map(({ title, section }) => (
											<NavbarItem
												key={title}
												title={title}
												section={section}
												classProps={'navbar__item-margin'}
												onClick={handleMenuClose}
											/>
										))}
										<LoginIcon
											onClick={() => {
												handleMenuClose();
												scrollToTop();
											}}
										/>
									</ul>
								</nav>
							)}
						</>
					) : (
						<nav className='navbar__desktop'>
							<ul className='navbar__desktop-list'>
								{navbarItems.map(({ title, section }) => (
									<NavbarItem key={title} title={title} section={section} />
								))}
								<LoginIcon liStyles='navbar__login-icon-margin' onClick={scrollToTop} />
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};
