import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { FormSubmit, InputElement, ReCaptchaV2Component, TextareaElement } from './components/FormElements';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
import { contactSchema } from '../../schemas/schemas';
import { ContactComponentModel, ContactFormModel } from '../../models/contactForm.model';

export const ContactForm: React.FC<ContactComponentModel> = ({
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
	} = useForm<ContactFormModel>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const contactFormInputs = contactFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<ContactFormModel> = async ({ name, email, message }) => {
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
					reset();
					setButtonText('Wysłane!');
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
			<ReCaptchaV2Component isMobile={isMobile} refCaptcha={refCaptcha} errorValue={errorValue} />
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
		</form>
	);
};
