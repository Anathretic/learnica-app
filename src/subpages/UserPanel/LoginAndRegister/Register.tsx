import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../../../components/Forms/RegisterForm';
import { useCheckSessionStatus } from '../../../hooks/useCheckSessionStatus';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

const Register: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<main>
			<section className='register'>
				<div className='register__container white-gradient'>
					<h1 className='register__title'>Rejestracja</h1>
					<Link to='/' className='register__close-button' onClick={scrollToTop}>
						X
					</Link>
					<hr className='register__strap' />
					<RegisterForm />
					<hr className='register__strap' />
					<div className='register__form-toggle'>
						<p>Posiadasz już konto?</p>
						<Link to='/logowanie' onClick={scrollToTop}>
							Logowanie
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Register;
