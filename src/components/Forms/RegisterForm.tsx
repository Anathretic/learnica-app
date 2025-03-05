import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from './components/FormElements';
import { useRegisterOptions } from '../../hooks/useRegisterOptions';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setButtonText, setIsLoading } from '../../redux/formReduxSlice/formSlice';
import { setPopupErrorValue } from '../../redux/errorPopupReduxSlice/errorPopupSlice';
import { registerFormInputsConfig } from './inputsConfig/inputsConfig';
import { RegisterFormModel } from '../../models/loginAndRegisterForm.model';
import { registerSchema } from '../../schemas/schemas';

export const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterFormModel>({
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
	const dispatch = useAppDispatch();
	const { isEmailExisting } = useRegisterOptions();
	const registerFormInputs = registerFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<RegisterFormModel> = async ({ firstname, lastname, email, phone, password }) => {
		dispatch(setIsLoading(true));

		const emailExists = await isEmailExisting(email);

		if (emailExists) {
			dispatch(setIsLoading(false));
			dispatch(setPopupErrorValue('Konto z takim adresem e-mail już istnieje!'));
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
				dispatch(setIsLoading(false));
				navigate('/');
			} else {
				dispatch(setIsLoading(false));
				dispatch(setPopupErrorValue('Coś poszło nie tak.. Spróbuj ponownie!'));
			}
		}
	};

	useEffect(() => {
		dispatch(setButtonText('Zarejestruj się'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			{registerFormInputs.map((input, id) => (
				<InputElement
					key={id}
					label={input.label}
					inputName={input.inputName}
					type={input.type}
					placeholder={input.placeholder}
					errorMessage={input.errorMessage}
					aria-invalid={input.isInvalid}
					{...input.register}
				/>
			))}
			<FormSubmit />
		</form>
	);
};
