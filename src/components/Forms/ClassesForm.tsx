import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	SelectElement,
	TextareaElement,
} from './components/FormElements';
import { classesFormInputs, classesFormSelects } from './config/formsConfig';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { classesSchema, translationsSchema } from '../../schemas/schemas';
import { ClassesModel, ClassesFormModel } from '../../models/form.model';

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
			classesLocation: '',
			message: '',
		},
		resolver: yupResolver(pathname === 'tlumaczenia' ? translationsSchema : classesSchema),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { ClassesSubmit } = useFormSubmits<ClassesFormModel>({ reset, refCaptcha });

	const selectsToRender = pathname === 'tlumaczenia' ? classesFormSelects.slice(0, 1) : classesFormSelects;

	useEffect(() => {
		setPathname(window.location.pathname.slice(1));
	}, []);

	return (
		<form className='classes__form-box' onSubmit={handleSubmit(ClassesSubmit)}>
			{classesFormInputs.map((input, id) => {
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
			{selectsToRender.map((select, id) => {
				const error = errors[select.selectName];
				return (
					<SelectElement
						key={id}
						label={select.label}
						selectName={select.selectName}
						optionItemsArray={select.optionItemsArray}
						errorMessage={error?.message as string}
						aria-invalid={!!error}
						{...register(select.selectName)}
						pathname={pathname}
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
			<ReCaptchaV2Component refCaptcha={refCaptcha} />
			<FormSubmit />
			<ReturnButton />
		</form>
	);
};
