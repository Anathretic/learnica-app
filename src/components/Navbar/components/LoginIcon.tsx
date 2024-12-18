import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaUser } from 'react-icons/fa';
import { LoginIconModel } from '../../../models/navbar.model';

export const LoginIcon: React.FC<LoginIconModel> = ({ liStyles, isScrolled }) => {
	const isDesktop = useMediaQuery({ query: '(min-width: 1536px)' });

	return (
		<li className={`${liStyles}`}>
			<Link className={`${isScrolled}`} to='/logowanie'>
				<FaUser fontSize={isDesktop ? 24 : 22} />
			</Link>
		</li>
	);
};
