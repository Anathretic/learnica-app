import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { CaptchaComponent, FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { getFormInitialValues, setButtonText, setErrorValue } from '../../redux/formReduxSlice/formSlice';
import { recoverPasswordFormInputs } from './config/formsConfig';
import { recoverPasswordSchema } from '../../schemas/schemas';
import { RecoverPasswordFormModel } from '../../models/form.model';

export const RecoverPasswordForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RecoverPasswordFormModel>({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(recoverPasswordSchema),
	});

	const refCaptcha = useRef<HCaptcha>(null);
	const { errorValue } = useAppSelector(getFormInitialValues);
	const dispatch = useAppDispatch();

	const { RecoverPasswordSubmit } = useFormSubmits<RecoverPasswordFormModel>({ reset, refCaptcha });

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	useEffect(() => {
		if (errorValue) {
			dispatch(setErrorValue(''));
		}
	}, [dispatch]);

	return (
		<form className='form' onSubmit={handleSubmit(RecoverPasswordSubmit)}>
			<p className='form__special-text'>
				Jeśli zapomniałeś hasło prześlij swój email, a dostaniesz link by je zresetować. Działa tylko w wypadku
				<span> posiadania konta </span>w serwisie!
			</p>
			{recoverPasswordFormInputs.map((input, id) => {
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
