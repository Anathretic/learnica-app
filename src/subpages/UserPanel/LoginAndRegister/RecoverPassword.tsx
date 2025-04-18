import { Link } from 'react-router-dom';
import { RecoverPasswordForm } from '../../../components/Forms/RecoverPasswordForm';

const RecoverPassword: React.FC = () => {
	return (
		<main>
			<section className='recover-password'>
				<div className='recover-password__container white-gradient'>
					<h1 className='recover-password__title'>Odzyskaj hasło</h1>
					<Link to='/' className='recover-password__close-button' >
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
	);
};

export default RecoverPassword;
