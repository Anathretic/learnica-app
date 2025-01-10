import { useState } from 'react';
import { ChangePasswordForm } from '../components/Forms/ChangePasswordForm';
import { useSubmitFormButton } from '../hooks/useSubmitFormButton';

const initialSubmitButtonState = 'Wyślij';

const ChangePassword: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [buttonText, setButtonText] = useSubmitFormButton({ initialSubmitButtonState });

	return (
		<section className='change-password'>
			<div className='change-password__container white-gradient'>
				<h2 className='change-password__title'>Ustaw nowe hasło</h2>
				<hr className='change-password__strap' />
				<ChangePasswordForm
					isLoading={isLoading}
					setIsLoading={setIsLoading}
					buttonText={buttonText}
					setButtonText={setButtonText}
				/>
			</div>
		</section>
	);
};

export default ChangePassword;
