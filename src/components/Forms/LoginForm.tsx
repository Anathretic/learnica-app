import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { CaptchaComponent, FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { getFormInitialValues, setButtonText, setErrorValue } from '../../redux/formReduxSlice/formSlice';
import { loginFormInputs } from './config/formsConfig';
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

	const refCaptcha = useRef<HCaptcha>(null);
	const { errorValue } = useAppSelector(getFormInitialValues);
	const dispatch = useAppDispatch();

	const { LoginSubmit } = useFormSubmits<LoginFormModel>({ reset, refCaptcha });

	useEffect(() => {
		dispatch(setButtonText('Zaloguj się'));
	}, []);

	useEffect(() => {
		if (errorValue) {
			dispatch(setErrorValue(''));
		}
	}, [dispatch]);

	return (
		<form className='form' onSubmit={handleSubmit(LoginSubmit)}>
			{loginFormInputs.map((input, id) => {
				const error = errors[input.inputName];
				return (
					<InputElement
						key={id}
						label={input.label}
						inputName={input.inputName}
						type={input.type}
						placeholder={input.placeholder}
						errorMessage={error?.message as string}
						aria-invalid={!!error}
						{...register(input.inputName)}
					/>
				);
			})}
			<CaptchaComponent refCaptcha={refCaptcha} />
			<FormSubmit classname='form__submit--user-actions' />
			<div className='form__password-recover-box'>
				<Link to='/odzyskiwanie-hasla' className='form__password-recover-btn'>
					Nie pamiętasz hasła?
				</Link>
			</div>
		</form>
	);
};
