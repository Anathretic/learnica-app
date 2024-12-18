import { HashLink } from 'react-router-hash-link';
import { NavbarItemModel } from '../../../models/navbar.model';

export const NavbarItem: React.FC<NavbarItemModel> = ({
	title,
	section,
	classProps,
	isScrolled,
	onClick,
	...linkProps
}) => {
	return (
		<li className={`${classProps} ${isScrolled}`}>
			<HashLink smooth to={section} onClick={onClick} {...linkProps}>
				{title}
			</HashLink>
		</li>
	);
};
