import { useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { FormSubmit, InputElement, ReCaptchaV2Component, TextareaElement } from './components/FormElements';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setButtonText, setErrorValue, setIsLoading } from '../../redux/formReduxSlice/FormSlice';
import { contactSchema } from '../../schemas/schemas';
import { ContactFormModel } from '../../models/contactForm.model';

export const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormModel>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const dispatch = useAppDispatch();
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const contactFormInputs = contactFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<ContactFormModel> = async ({ name, email, message }) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			name,
			email,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					dispatch(setButtonText('Wysłane!'));
				})
				.catch(err => {
					dispatch(setErrorValue('Coś poszło nie tak..'));
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					dispatch(setIsLoading(false));
				});
		} else {
			dispatch(setIsLoading(false));
			dispatch(setErrorValue('Nie bądź 🤖!'));
		}
	};

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	return (
		<form className='contact__form' onSubmit={handleSubmit(onSubmit)}>
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
