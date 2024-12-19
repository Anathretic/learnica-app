import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaUser } from 'react-icons/fa';
import { LoginIconModel } from '../../../models/navbar.model';

export const LoginIcon: React.FC<LoginIconModel> = ({ liStyles, onClick }) => {
	const isDesktop = useMediaQuery({ query: '(min-width: 1536px)' });

	return (
		<li className={`${liStyles} navbar__login-icon`}>
			<Link className='navbar__login-icon-link' to='/logowanie' onClick={onClick}>
				<FaUser fontSize={isDesktop ? 24 : 22} />
			</Link>
		</li>
	);
};
