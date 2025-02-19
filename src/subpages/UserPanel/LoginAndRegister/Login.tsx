import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../../components/Forms/LoginForm';
import { useCheckSessionStatus } from '../../../hooks/useCheckSessionStatus';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

const Login: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<section className='login'>
			<div className='login__container white-gradient'>
				<h1 className='login__title'>Logowanie</h1>
				<Link to='/' className='login__close-button' onClick={scrollToTop}>
					X
				</Link>
				<hr className='login__strap' />
				<LoginForm />
				<hr className='login__strap' />
				<div className='login__form-toggle'>
					<p>Nie masz jeszcze konta?</p>
					<Link to='/rejestracja' onClick={scrollToTop}>
						Rejestracja
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Login;
