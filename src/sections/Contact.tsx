import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useForm, SubmitHandler } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { FormSubmit, InputElement, TextareaElement, Loader } from '../components/FormElements';
import { useContactFormButton } from '../hooks/useContactFormButton';
import { contactSchema } from '../schemas/schemas';
import { ContactModel } from '../models/contactForm.model';

const Contact: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactModel>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const [buttonText, setButtonText] = useContactFormButton();
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	const onSubmit: SubmitHandler<ContactModel> = async ({ name, email, message }) => {
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
		<section className='contact' id='kontakt'>
			<div className='contact__container'>
				<div className='contact__title-box'>
					<h2 className='contact__title'>Kontakt</h2>
					<div className='contact__title-info-box white-gradient'>
						<div>
							<p>E-mail:</p>
							<p>Telefon:</p>
							<p>NIP:</p>
						</div>
						<div>
							<p>test@test.gmail.com</p>
							<p>111-111-111</p>
							<p>1234567890</p>
						</div>
					</div>
				</div>
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
					<div className='form__recaptcha-box'>
						<ReCAPTCHA
							key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
							size={isMobile ? 'compact' : 'normal'}
							sitekey={import.meta.env.VITE_SITE_KEY}
							ref={refCaptcha}
						/>
						<div className='form__recaptcha-error'>
							<p>{errorValue}</p>
						</div>
					</div>
					<div className='form__box'>
						{isLoading ? <Loader className='loader' /> : <FormSubmit value={buttonText} />}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
