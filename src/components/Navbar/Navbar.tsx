import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavbarItem } from './components/NavbarItem';
import { LoginIcon } from './components/LoginIcon';
import { navbarItems } from './components/navbarData/navbarItems';

export const Navbar: React.FC = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const divRef = useRef<null | HTMLDivElement>(null);

	const handleScroll = () => {
		if (window.scrollY > 80) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const scrollToTop = () => {
		const { current } = divRef;

		if (current !== null) {
			current.scrollIntoView({ behavior: 'smooth' });
		}

		if (window.location.hash) {
			window.history.replaceState('', document.title, window.location.pathname);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => scrollToTop, []);

	return (
		<header className='w-full flex justify-center' ref={divRef}>
			<div className={`${isScrolled}`}>
				<div>
					<div>
						<h2>lernica</h2>
					</div>
				</div>
				<nav>
					<ul>
						{navbarItems.map(({ title, section }) => (
							<NavbarItem key={title} title={title} section={section} isScrolled={isScrolled} />
						))}
						<LoginIcon liStyles='' isScrolled={isScrolled} />
					</ul>
				</nav>
				<div>
					{toggleMenu || <HiMenuAlt4 fontSize={32} onClick={() => setToggleMenu(true)} />}
					{toggleMenu && (
						<nav>
							<ul>
								<li>
									<AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
								</li>
								{navbarItems.map(({ title, section }) => (
									<NavbarItem
										key={title}
										title={title}
										section={section}
										classProps={''}
										onClick={() => {
											setToggleMenu(false);
										}}
									/>
								))}
								<LoginIcon liStyles='' />
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};
