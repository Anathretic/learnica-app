import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabase/supabase';
import { FormSubmit, InputElement } from './InputAndTextarea';
import { ResetPasswordComponentModel, ResetPasswordModel } from '../models/loginAndRegister.model';
import { resetPasswordSchema } from '../schemas/schemas';
import { scrollToTop } from '../utils/scrollToTopUtils';

export const ResetPassword: React.FC<ResetPasswordComponentModel> = ({ setPasswordReset }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ResetPasswordModel>({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(resetPasswordSchema),
	});

	const onSubmit: SubmitHandler<ResetPasswordModel> = async ({ email }) => {
		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${import.meta.env.VITE_RESET_PASSWORD_URL}`,
		});

		if (!error) {
			reset();
		} else {
			console.log(error);
		}
	};

	return (
		<>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<p>
					Jeśli zapomniałeś hasło prześlij swój email, a dostaniesz link by je zresetować. Działa tylko w wypadku
					<span> posiadania konta </span>w serwisie!
				</p>
				<InputElement
					label='E-mail:'
					inputName='email'
					type='text'
					placeholder='Wprowadź adres e-mail..'
					children={errors.email?.message}
					aria-invalid={errors.email ? true : false}
					{...register('email')}
				/>
				<FormSubmit value='Wyślij' />
			</form>
			<hr className='login__strap' />
			<div className='login__form-toggle'>
				<p>A jeśli sobie przypomniałeś..</p>
				<button
					type='button'
					onClick={() => {
						reset();
						setPasswordReset(false);
						scrollToTop();
					}}>
					Powrót
				</button>
			</div>
		</>
	);
};
