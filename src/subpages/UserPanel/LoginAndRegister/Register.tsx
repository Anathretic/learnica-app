import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '../../../components/Forms/RegisterForm';
import { useCheckSessionStatus } from '../../../hooks/useCheckSessionStatus';

const Register: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Rejestracja | Learnica</title>
				<meta name='description' content='Załóż konto w Learnica i rozpocznij swoją edukacyjną przygodę już dziś.' />
				<meta property='og:title' content='Rejestracja | Learnica' />
				<meta
					property='og:description'
					content='Dołącz do Learnica i ucz się skutecznie z najlepszymi nauczycielami.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/rejestracja' />
				<link rel='canonical' href='https://learnica.pl/rejestracja' />
			</Helmet>
			<main>
				<section className='register'>
					<div className='register__container white-gradient'>
						<h1 className='register__title'>Rejestracja</h1>
						<Link to='/' className='register__close-button'>
							X
						</Link>
						<hr className='register__strap' />
						<RegisterForm />
						<hr className='register__strap' />
						<div className='register__form-toggle'>
							<p>Posiadasz już konto?</p>
							<Link to='/logowanie'>Logowanie</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Register;
