import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabase/supabase';
import { InputElement } from '../components/InputAndTextarea';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';
import { RegisterData } from '../models/loginAndRegister.model';
import { registerSchema } from '../schemas/schemas';

const Register: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterData>({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerSchema),
	});
	const navigate = useNavigate();
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	const onSubmit: SubmitHandler<RegisterData> = async ({ firstname, lastname, email, phone, password }) => {
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					first_name: firstname,
					last_name: lastname,
					phone_number: phone,
				},
			},
		});

		if (!error) {
			reset();
			navigate('/');
		} else {
			console.log(error);
		}
	};

	return (
		<section>
			<h2>Rejestracja</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputElement
					label='Imię:'
					inputName='firstname'
					type='text'
					placeholder='Wprowadź swoje imię..'
					children={errors.firstname?.message}
					aria-invalid={errors.firstname ? true : false}
					{...register('firstname')}
				/>
				<InputElement
					label='Nazwisko:'
					inputName='lastname'
					type='text'
					placeholder='Wprowadź swoje nazwisko..'
					children={errors.lastname?.message}
					aria-invalid={errors.lastname ? true : false}
					{...register('lastname')}
				/>
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
					label='Nr telefonu:'
					inputName='phone'
					placeholder='Wprowadź numer telefonu..'
					children={errors.phone?.message}
					aria-invalid={errors.phone ? true : false}
					{...register('phone')}
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
				<InputElement
					label='Powtórz hasło:'
					inputName='confirmPassword'
					type='password'
					placeholder='Wprowadź ponownie hasło..'
					children={errors.confirmPassword?.message}
					aria-invalid={errors.confirmPassword ? true : false}
					{...register('confirmPassword')}
				/>
				<button type='submit'>Zarejestruj się</button>
			</form>
		</section>
	);
};

export default Register;
