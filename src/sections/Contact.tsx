import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement, TextareaElement } from '../components/InputAndTextarea';
import { contactSchema } from '../schemas/schemas';
import { ContactModel } from '../models/contactForm.model';

const Contact: React.FC = () => {
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

	const onSubmit: SubmitHandler<ContactModel> = async ({ name, email, message }) => {
		console.log(name, email, message);
		reset();
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
					<FormSubmit value='Wyślij' />
				</form>
			</div>
		</section>
	);
};

export default Contact;
