import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from '../FormElements';
import { LoginComponentModel, LoginFormModel } from '../../models/loginAndRegisterForm.model';
import { loginSchema } from '../../schemas/schemas';

export const LoginForm: React.FC<LoginComponentModel> = ({ setPasswordReset, navigate }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormModel>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<LoginFormModel> = async ({ email, password }) => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (!error) {
			reset();
			navigate('/panel-uzytkownika');
		} else {
			console.log(error);
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<InputElement
				label='E-mail:'
				inputName='email'
				type='text'
				placeholder='Wprowadź adres e-mail..'
				children={errors.email?.message}
				aria-invalid={errors.email ? true : false}
				{...register('email')}
			/>
			<InputElement
				label='Hasło:'
				inputName='password'
				type='password'
				placeholder='Wprowadź hasło..'
				children={errors.password?.message}
				aria-invalid={errors.password ? true : false}
				{...register('password')}
			/>
			<div className='form__password-reset-box'>
				<button className='form__password-reset-btn' type='button' onClick={() => setPasswordReset(true)}>
					Nie pamiętasz hasła?
				</button>
			</div>
			<FormSubmit value='Zaloguj się' />
		</form>
	);
};
