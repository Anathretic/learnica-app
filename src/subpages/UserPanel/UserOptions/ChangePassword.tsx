import { ChangePasswordForm } from '../../../components/Forms/ChangePasswordForm';

const ChangePassword: React.FC = () => {
	return (
		<section className='change-password'>
			<div className='change-password__container white-gradient'>
				<h2 className='change-password__title'>Ustaw nowe hasło</h2>
				<hr className='change-password__strap' />
				<ChangePasswordForm />
			</div>
		</section>
	);
};

export default ChangePassword;
