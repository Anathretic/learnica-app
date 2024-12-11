import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabase/supabase';
import { InputElement } from '../components/InputAndTextarea';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';
import { LoginData } from '../models/loginAndRegister.model';
import { loginSchema } from '../schemas/schemas';

const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginData>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});
	const navigate = useNavigate();
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	const onSubmit: SubmitHandler<LoginData> = async ({ email, password }) => {
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
		<section>
			<h2>Logowanie</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
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
				<button type='submit'>Zaloguj się</button>
			</form>
		</section>
	);
};

export default Login;
