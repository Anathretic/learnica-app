import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactFormInput, ContactFormTextarea } from '../components/ContactFormElements';
import { contactSchema } from '../schemas/schemas';
import { SubmitInputs } from '../models/contactForm.model';

const Contact: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SubmitInputs>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<SubmitInputs> = async ({ name, email, message }) => {
		console.log(name, email, message);
		reset();
	};

	return (
		<section>
			<h2>Contact</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ContactFormInput
					label='Imię i nazwisko:'
					inputName='name'
					placeholder='Wprowadź imię i nazwisko..'
					children={errors.name?.message}
					aria-invalid={errors.name ? true : false}
					{...register('name')}
				/>
				<ContactFormInput
					label='E-mail:'
					inputName='email'
					placeholder='Wprowadź adres e-mail..'
					children={errors.email?.message}
					aria-invalid={errors.email ? true : false}
					{...register('email')}
				/>
				<ContactFormTextarea
					label='Wiadomość:'
					inputName='message'
					placeholder='Wprowadź wiadomość..'
					children={errors.message?.message}
					aria-invalid={errors.message ? true : false}
					{...register('message')}
				/>
				<button type='submit'>Wyślij</button>
			</form>
		</section>
	);
};

export default Contact;
