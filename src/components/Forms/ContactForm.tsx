import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement, ReCaptchaV2Component, TextareaElement } from './components/FormElements';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { setButtonText, setErrorValue } from '../../redux/formReduxSlice/formSlice';
import { contactSchema } from '../../schemas/schemas';
import { ContactFormModel } from '../../models/form.model';

export const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormModel>({
		defaultValues: {
			firstname: '',
			email: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { ContactSubmit } = useFormSubmits<ContactFormModel>({ reset, refCaptcha });
	const contactFormInputs = contactFormInputsConfig(errors, register);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (refCaptcha.current?.getValue() === '') {
			dispatch(setErrorValue(''));
		}
	}, [dispatch]);

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	return (
		<form className='contact__form' onSubmit={handleSubmit(ContactSubmit)}>
			{contactFormInputs.map((input, id) => (
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
			<TextareaElement
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość..'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<ReCaptchaV2Component refCaptcha={refCaptcha} />
			<FormSubmit />
		</form>
	);
};
