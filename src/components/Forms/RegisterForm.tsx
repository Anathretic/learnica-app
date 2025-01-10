import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from './components/FormElements';
import { registerFormInputsConfig } from './inputsConfig/inputsConfig';
import { RegisterComponentModel, RegisterFormModel } from '../../models/loginAndRegisterForm.model';
import { registerSchema } from '../../schemas/schemas';

export const RegisterForm: React.FC<RegisterComponentModel> = ({
	isEmailExisting,
	navigate,
	isLoading,
	setIsLoading,
}) => {
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

	const registerFormInputs = registerFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<RegisterFormModel> = async ({ firstname, lastname, email, phone, password }) => {
		setIsLoading(true);

		const emailExists = await isEmailExisting(email);

		if (emailExists) {
			setIsLoading(false);
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
				setIsLoading(false);
				navigate('/');
			} else {
				console.log(error);
			}
		}
	};

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
			<FormSubmit isLoading={isLoading} buttonText='Zarejestruj się' />
		</form>
	);
};
