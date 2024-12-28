import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabase/supabase';
import { FormSubmit, InputElement } from '../components/InputAndTextarea';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';
import { useRegisterOptions } from '../hooks/useRegisterOptions';
import { RegisterDataModel } from '../models/loginAndRegister.model';
import { registerSchema } from '../schemas/schemas';
import { scrollToTop } from '../utils/scrollToTopUtils';

const Register: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterDataModel>({
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
	const { isEmailExisting } = useRegisterOptions();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	const onSubmit: SubmitHandler<RegisterDataModel> = async ({ firstname, lastname, email, phone, password }) => {
		const emailExists = await isEmailExisting(email);

		if (emailExists) {
			console.log('Ten adres e-mail już istnieje!');
		} else {
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
		}
	};

	return (
		<section className='register'>
			<div className='register__container white-gradient'>
				<h2 className='register__title'>Rejestracja</h2>
				<hr className='register__strap' />
				<form className='form' onSubmit={handleSubmit(onSubmit)}>
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
					<FormSubmit value='Zarejestruj się' />
				</form>
				<hr className='register__strap' />
				<div className='register__form-toggle'>
					<p>Posiadasz już konto?</p>
					<Link to='/logowanie' onClick={scrollToTop}>
						Logowanie
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Register;
