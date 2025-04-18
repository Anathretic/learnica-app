import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../../components/Forms/LoginForm';
import { useCheckSessionStatus } from '../../../hooks/useCheckSessionStatus';

const Login: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<main>
			<section className='login'>
				<div className='login__container white-gradient'>
					<h1 className='login__title'>Logowanie</h1>
					<Link to='/' className='login__close-button'>
						X
					</Link>
					<hr className='login__strap' />
					<LoginForm />
					<hr className='login__strap' />
					<div className='login__form-toggle'>
						<p>Nie masz jeszcze konta?</p>
						<Link to='/rejestracja'>Rejestracja</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Login;
