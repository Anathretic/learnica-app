import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/Forms/RegisterForm';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';
import { useRegisterOptions } from '../hooks/useRegisterOptions';
import { scrollToTop } from '../utils/scrollToTopUtils';

const Register: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { checkSessionStatus } = useCheckSessionStatus();
	const { isEmailExisting } = useRegisterOptions();
	const navigate = useNavigate();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<section className='register'>
			<div className='register__container white-gradient'>
				<h2 className='register__title'>Rejestracja</h2>
				<Link to='/' className='register__close-button' onClick={scrollToTop}>
					X
				</Link>
				<hr className='register__strap' />
				<RegisterForm
					isEmailExisting={isEmailExisting}
					navigate={navigate}
					isLoading={isLoading}
					setIsLoading={setIsLoading}
				/>
				<hr className='register__strap' />
				<div className='register__form-toggle'>
					<p>Posiadasz już konto?</p>
					<Link to='/logowanie' onClick={scrollToTop}>
						Logowanie
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Register;
