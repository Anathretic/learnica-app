import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { FormSubmit, InputElement, Loader, ReCaptchaV2Component, TextareaElement } from '../FormElements';
import { contactSchema } from '../../schemas/schemas';
import { ContactComponentModel, ContactFormModel } from '../../models/contactForm.model';

export const ContactForm: React.FC<ContactFormModel> = ({
	isLoading,
	setIsLoading,
	errorValue,
	setErrorValue,
	buttonText,
	setButtonText,
	isMobile,
	refCaptcha,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactComponentModel>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactComponentModel> = async ({ name, email, message }) => {
		setIsLoading(true);
		setErrorValue('');
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
					setButtonText('Wysłane!');
					reset();
				})
				.catch(err => {
					setErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setErrorValue('Nie bądź 🤖!');
		}
	};

	return (
		<form className='contact__form' onSubmit={handleSubmit(onSubmit)}>
			<InputElement
				label='Imię i nazwisko:'
				inputName='name'
				type='text'
				placeholder='Wprowadź imię i nazwisko..'
				children={errors.name?.message}
				aria-invalid={errors.name ? true : false}
				{...register('name')}
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

			<TextareaElement
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość..'
				children={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<ReCaptchaV2Component isMobile={isMobile} refCaptcha={refCaptcha} errorValue={errorValue} />
			<div className='form__box'>{isLoading ? <Loader className='loader' /> : <FormSubmit value={buttonText} />}</div>
		</form>
	);
};
