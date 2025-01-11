import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from './components/FormElements';
import { ResetPasswordComponentModel, ResetPasswordFormModel } from '../../models/loginAndRegisterForm.model';
import { resetPasswordSchema } from '../../schemas/schemas';

export const ResetPasswordForm: React.FC<ResetPasswordComponentModel> = ({
	isLoading,
	setIsLoading,
	buttonText,
	setButtonText,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ResetPasswordFormModel>({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(resetPasswordSchema),
	});

	const onSubmit: SubmitHandler<ResetPasswordFormModel> = async ({ email }) => {
		setIsLoading(true);

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${import.meta.env.VITE_RESET_PASSWORD_URL}`,
		});

		if (!error) {
			reset();
			setIsLoading(false);
			setButtonText('Wysłane!');
		} else {
			console.log(error);
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<p className='form__special-text'>
				Jeśli zapomniałeś hasło prześlij swój email, a dostaniesz link by je zresetować. Działa tylko w wypadku
				<span> posiadania konta </span>w serwisie!
			</p>
			<InputElement
				label='E-mail:'
				inputName='email'
				type='text'
				placeholder='Wprowadź adres e-mail..'
				errorMessage={errors.email?.message}
				aria-invalid={errors.email ? true : false}
				{...register('email')}
			/>
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
		</form>
	);
};
