import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	FileInputElement,
	FormSubmit,
	InputElement,
	ReCaptchaV2Component,
	ReturnButton,
	SelectElement,
	TextareaElement,
} from './components/FormElements';
import { classesFormInputsConfig, classesFormSelectsConfig } from './inputsConfig/inputsConfig';
import { useFormSubmits } from '../../hooks/useFormSubmits';
import { classesSchema, translationsSchema } from '../../schemas/schemas';
import { ClassesModel, ClassesFormModel } from '../../models/form.model';

export const ClassesForm: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);
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
	const { ClassesSubmit } = useFormSubmits<ClassesFormModel>({ reset, refCaptcha, file });
	const classesFormInputs = classesFormInputsConfig(errors, register);
	const classesFormSelects = classesFormSelectsConfig(errors, register);

	const selectsToRender = pathname === 'tlumaczenia' ? classesFormSelects.slice(0, 1) : classesFormSelects;

	useEffect(() => {
		setPathname(window.location.pathname.slice(1));
	}, []);

	return (
		<form className='classes__form-box' onSubmit={handleSubmit(ClassesSubmit)}>
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
			{selectsToRender.map((select, id) => (
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
			{pathname === 'tlumaczenia' && (
				<FileInputElement
					setFile={setFile}
					label='Wstaw plik:'
					inputName='file'
					accept='.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
				/>
			)}
			<ReCaptchaV2Component refCaptcha={refCaptcha} />
			<FormSubmit />
			<ReturnButton />
		</form>
	);
};
