import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setButtonText, setErrorValue, setIsLoading } from '../../redux/formReduxSlice/formSlice';
import {
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	SelectElement,
	TextareaElement,
} from './components/FormElements';
import { classesFormInputsConfig, classesFormSelectsConfig } from './inputsConfig/inputsConfig';
import { ClassesModel, ClassesFormModel } from '../../models/form.model';
import { classesSchema } from '../../schemas/schemas';

export const ClassesForm: React.FC = () => {
	const [pathname, setPathname] = useState('');
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ClassesFormModel>({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			classes: `${window.location.pathname.slice(1) as ClassesModel}`,
			message: '',
		},
		resolver: yupResolver(classesSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const classesFormInputs = classesFormInputsConfig(errors, register);
	const classesFormSelects = classesFormSelectsConfig(errors, register);
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<ClassesFormModel> = async ({ firstname, lastname, email, phone, classes, message }) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstname,
			lastname,
			email,
			phone,
			classes,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_WORK_OFFER_TEMPLATE_ID}`,
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
		setPathname(window.location.pathname.slice(1));
	}, []);

	return (
		<form className='classes__form-box' onSubmit={handleSubmit(onSubmit)}>
			{classesFormInputs.map((input, id) => (
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
			{classesFormSelects.map((select, id) => (
				<SelectElement
					key={id}
					label={select.label}
					selectName={select.selectName}
					optionItemsArray={select.optionItemsArray}
					errorMessage={select.errorMessage}
					aria-invalid={select.isInvalid}
					{...select.register}
					pathname={pathname}
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
			<ReturnButton />
		</form>
	);
};
