import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { CaptchaComponent, FormSubmit, InputElement, TextareaElement } from './components/FormElements';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { getFormInitialValues, setButtonText, setErrorValue } from '../../redux/formReduxSlice/formSlice';
import { contactFormInputs } from './config/formsConfig';
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

	const refCaptcha = useRef<HCaptcha>(null);
	const { errorValue } = useAppSelector(getFormInitialValues);
	const dispatch = useAppDispatch();

	const { ContactSubmit } = useFormSubmits<ContactFormModel>({ reset, refCaptcha });

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	useEffect(() => {
		if (errorValue) {
			dispatch(setErrorValue(''));
		}
	}, [dispatch]);

	return (
		<form className='contact__form' onSubmit={handleSubmit(ContactSubmit)}>
			{contactFormInputs.map((input, id) => {
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
			<TextareaElement
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość..'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<CaptchaComponent refCaptcha={refCaptcha} />
			<FormSubmit />
		</form>
	);
};
