import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { setButtonText } from '../../redux/formReduxSlice/formSlice';
import { loginFormInputsConfig } from './inputsConfig/inputsConfig';
import { loginSchema } from '../../schemas/schemas';
import { LoginFormModel } from '../../models/form.model';

export const LoginForm: React.FC = () => {
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

	const { LoginSubmit } = useFormSubmits<LoginFormModel>({ reset });
	const loginFormInputs = loginFormInputsConfig(errors, register);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setButtonText('Zaloguj się'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(LoginSubmit)}>
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
			<div className='form__password-recover-box'>
				<Link to='/odzyskiwanie-hasla' className='form__password-recover-btn'>
					Nie pamiętasz hasła?
				</Link>
			</div>
			<FormSubmit />
		</form>
	);
};
