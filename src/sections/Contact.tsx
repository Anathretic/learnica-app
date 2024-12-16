import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputElement, TextareaElement } from '../components/InputAndTextarea';
import { contactSchema } from '../schemas/schemas';
import { ContactData } from '../models/contactForm.model';

const Contact: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactData>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactData> = async ({ name, email, message }) => {
		console.log(name, email, message);
		reset();
	};

	return (
		<section style={{ minHeight: '100vh' }}>
			<h2>Kontakt</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
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
				<button type='submit'>Wyślij</button>
			</form>
		</section>
	);
};

export default Contact;
