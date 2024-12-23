import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import { NavbarItem } from './components/NavbarItem';
import { LoginIcon } from './components/LoginIcon';
import { navbarItems } from './components/navbarData/navbarItems';

export const Navbar: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 80) {
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
		<header className='header'>
			<div className={`header__container ${isScrolled ? 'header__container--is-scrolled' : ''}`}>
				<div className='header__title'>
					<div className='header__title-box'>
						<HashLink className='header__title-text' to='/#'>
							<h2>learnica</h2>
						</HashLink>
					</div>
				</div>
				<nav className='navbar__desktop'>
					<ul className='navbar__desktop-list'>
						{navbarItems.map(({ title, section }) => (
							<NavbarItem key={title} title={title} section={section} />
						))}
						<LoginIcon liStyles='navbar__login-icon-margin' />
					</ul>
				</nav>
				{!toggleMenu && (
					<HiMenuAlt4 className='navbar__mobile-burger-btn' fontSize={32} onClick={() => setToggleMenu(true)} />
				)}
				{toggleMenu && (
					<nav className='navbar__mobile'>
						<ul className='navbar__mobile-list'>
							<li className='navbar__mobile-exit-icon'>
								<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
							</li>
							{navbarItems.map(({ title, section }) => (
								<NavbarItem
									key={title}
									title={title}
									section={section}
									classProps={'navbar__item-margin'}
									onClick={() => {
										setToggleMenu(false);
									}}
								/>
							))}
							<LoginIcon onClick={() => setToggleMenu(false)} />
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};
