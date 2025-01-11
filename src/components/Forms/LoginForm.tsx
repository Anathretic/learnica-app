import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from './components/FormElements';
import { loginFormInputsConfig } from './inputsConfig/inputsConfig';
import { LoginComponentModel, LoginFormModel } from '../../models/loginAndRegisterForm.model';
import { loginSchema } from '../../schemas/schemas';

export const LoginForm: React.FC<LoginComponentModel> = ({ setPasswordReset, navigate, isLoading, setIsLoading }) => {
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

	const loginFormInputs = loginFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<LoginFormModel> = async ({ email, password }) => {
		setIsLoading(true);

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (!error) {
			reset();
			setIsLoading(false);
			navigate('/panel-uzytkownika');
		} else {
			console.log(error);
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			{loginFormInputs.map((input, id) => (
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
			<div className='form__password-reset-box'>
				<button className='form__password-reset-btn' type='button' onClick={() => setPasswordReset(true)}>
					Nie pamiętasz hasła?
				</button>
			</div>
			<FormSubmit isLoading={isLoading} buttonText='Zaloguj się' />
		</form>
	);
};
