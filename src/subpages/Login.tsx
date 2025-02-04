import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/Forms/LoginForm';
import { ResetPasswordForm } from '../components/Forms/ResetPasswordForm';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';
import { getFormInitialValues, setPasswordReset } from '../redux/formReduxSlice/FormSlice';
import { scrollToTop } from '../utils/scrollToTopUtils';

const Login: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();
	const { passwordReset } = useAppSelector(getFormInitialValues);
	const dispatch = useAppDispatch();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<section className='login'>
			<div className='login__container white-gradient'>
				<h2 className='login__title'>{passwordReset ? 'Zresetuj hasło' : 'Logowanie'}</h2>
				<Link to='/' className='login__close-button' onClick={scrollToTop}>
					X
				</Link>
				<hr className='login__strap' />
				<>
					{passwordReset ? (
						<>
							<ResetPasswordForm />
							<hr className='login__strap' />
							<div className='login__form-toggle'>
								<p>A jeśli sobie przypomniałeś..</p>
								<button
									type='button'
									onClick={() => {
										dispatch(setPasswordReset(false));
										scrollToTop();
									}}>
									Powrót
								</button>
							</div>
						</>
					) : (
						<>
							<LoginForm />
							<hr className='login__strap' />
							<div className='login__form-toggle'>
								<p>Nie masz jeszcze konta?</p>
								<Link to='/rejestracja' onClick={scrollToTop}>
									Rejestracja
								</Link>
							</div>
						</>
					)}
				</>
			</div>
		</section>
	);
};

export default Login;
