import { HashLink } from 'react-router-hash-link';
import { NavbarItemModel } from '../../../models/navbar.model';

export const NavbarItem: React.FC<NavbarItemModel> = ({ title, section, classProps, onClick, ...linkProps }) => {
	return (
		<li className={`navbar__item ${classProps}`}>
			<HashLink smooth to={section} onClick={onClick} className='navbar__item-link' {...linkProps}>
				{title}
			</HashLink>
		</li>
	);
};
