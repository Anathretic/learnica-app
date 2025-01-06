import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from '../FormElements';
import { FormComponentModel, LoginDataModel } from '../../models/loginAndRegister.model';
import { loginSchema } from '../../schemas/schemas';

export const LoginForm: React.FC<FormComponentModel> = ({ setPasswordReset }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginDataModel>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<LoginDataModel> = async ({ email, password }) => {
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
