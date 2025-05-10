import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RecoverPasswordForm } from '../../../components/Forms/RecoverPasswordForm';

const RecoverPassword: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Odzyskiwanie Hasła | Learnica</title>
				<meta
					name='description'
					content='Zresetuj swoje hasło i odzyskaj dostęp do konta Learnica. Bezpieczny i prosty proces przywracania dostępu.'
				/>
				<meta property='og:title' content='Odzyskiwanie Hasła | Learnica' />
				<meta
					property='og:description'
					content='Zgubiłeś hasło? Skorzystaj z prostego formularza odzyskiwania konta w Learnica.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/odzyskiwanie-hasla' />
				<link rel='canonical' href='https://learnica.pl/odzyskiwanie-hasla' />
			</Helmet>
			<main>
				<section className='recover-password'>
					<div className='recover-password__container white-gradient'>
						<h1 className='recover-password__title'>Odzyskaj hasło</h1>
						<Link to='/' className='recover-password__close-button'>
							X
						</Link>
						<hr className='recover-password__strap' />
						<RecoverPasswordForm />
						<hr className='recover-password__strap' />
						<div className='recover-password__form-toggle'>
							<p>A jeśli sobie przypomniałeś..</p>
							<Link to='/logowanie'>Powrót</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default RecoverPassword;
