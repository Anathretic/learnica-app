import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../../../components/Forms/LoginForm';
import { useCheckSessionStatus } from '../../../hooks/useCheckSessionStatus';

const Login: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Logowanie | Learnica</title>
				<meta
					name='description'
					content='Zaloguj się do swojego konta Learnica, aby kontynuować naukę i mieć dostęp do materiałów.'
				/>
				<meta property='og:title' content='Logowanie | Learnica' />
				<meta property='og:description' content='Dostęp do konta ucznia i materiałów edukacyjnych.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/logowanie' />
				<link rel='canonical' href='https://learnica.pl/logowanie' />
			</Helmet>
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
		</>
	);
};

export default Login;
