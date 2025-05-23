import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { CaptchaComponent, FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { getFormInitialValues, setButtonText, setErrorValue } from '../../redux/formReduxSlice/formSlice';
import { registerFormInputs } from './config/formsConfig';
import { registerSchema } from '../../schemas/schemas';
import { RegisterFormModel } from '../../models/form.model';

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

	const refCaptcha = useRef<HCaptcha>(null);
	const { errorValue } = useAppSelector(getFormInitialValues);
	const dispatch = useAppDispatch();

	const { RegisterSubmit } = useFormSubmits<RegisterFormModel>({ reset, refCaptcha });

	useEffect(() => {
		dispatch(setButtonText('Zarejestruj się'));
	}, []);

	useEffect(() => {
		if (errorValue) {
			dispatch(setErrorValue(''));
		}
	}, [dispatch]);

	return (
		<form className='form' onSubmit={handleSubmit(RegisterSubmit)}>
			{registerFormInputs.map((input, id) => {
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
		</form>
	);
};
