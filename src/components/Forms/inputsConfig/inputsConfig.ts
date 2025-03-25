import { FieldErrors, UseFormRegister } from 'react-hook-form';
import {
	ChangePasswordFormModel,
	ClassesFormModel,
	ContactFormModel,
	LoginFormModel,
	RegisterFormModel,
} from '../../../models/form.model';

export const contactFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<ContactFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstname?.message,
		isInvalid: !!errors.firstname,
		register: register('firstname'),
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
];

export const loginFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<LoginFormModel>) => [
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
	{
		label: 'Hasło:',
		inputName: 'password',
		type: 'password',
		placeholder: 'Wprowadź hasło..',
		errorMessage: errors.password?.message,
		isInvalid: !!errors.password,
		register: register('password'),
	},
];

export const registerFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<RegisterFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstname?.message,
		isInvalid: !!errors.firstname,
		register: register('firstname'),
	},
	{
		label: 'Nazwisko:',
		inputName: 'lastname',
		type: 'text',
		placeholder: 'Wprowadź nazwisko..',
		errorMessage: errors.lastname?.message,
		isInvalid: !!errors.lastname,
		register: register('lastname'),
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
	{
		label: 'Nr telefonu:',
		inputName: 'phone',
		type: 'text',
		placeholder: 'Wprowadź numer telefonu..',
		errorMessage: errors.phone?.message,
		isInvalid: !!errors.phone,
		register: register('phone'),
	},
	{
		label: 'Hasło:',
		inputName: 'password',
		type: 'password',
		placeholder: 'Wprowadź hasło..',
		errorMessage: errors.password?.message,
		isInvalid: !!errors.password,
		register: register('password'),
	},
	{
		label: 'Powtórz hasło:',
		inputName: 'confirmPassword',
		type: 'password',
		placeholder: 'Wprowadź ponownie hasło..',
		errorMessage: errors.confirmPassword?.message,
		isInvalid: !!errors.confirmPassword,
		register: register('confirmPassword'),
	},
];

export const changePasswordInputsConfig = (errors: FieldErrors, register: UseFormRegister<ChangePasswordFormModel>) => [
	{
		label: 'Hasło:',
		inputName: 'password',
		type: 'password',
		placeholder: 'Wprowadź hasło..',
		errorMessage: errors.password?.message,
		isInvalid: !!errors.password,
		register: register('password'),
	},
	{
		label: 'Powtórz hasło:',
		inputName: 'confirmPassword',
		type: 'password',
		placeholder: 'Wprowadź ponownie hasło..',
		errorMessage: errors.confirmPassword?.message,
		isInvalid: !!errors.confirmPassword,
		register: register('confirmPassword'),
	},
];

export const classesFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<ClassesFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstname',
		type: 'text',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstname?.message,
		isInvalid: !!errors.firstname,
		register: register('firstname'),
	},
	{
		label: 'Nazwisko:',
		inputName: 'lastname',
		type: 'text',
		placeholder: 'Wprowadź nazwisko..',
		errorMessage: errors.lastname?.message,
		isInvalid: !!errors.lastname,
		register: register('lastname'),
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		type: 'text',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
	{
		label: 'Telefon:',
		inputName: 'phone',
		type: 'text',
		placeholder: 'Wprowadź numer telefonu..',
		errorMessage: errors.phone?.message,
		isInvalid: !!errors.phone,
		register: register('phone'),
	},
];

export const classesFormSelectsConfig = (errors: FieldErrors, register: UseFormRegister<ClassesFormModel>) => [
	{
		label: 'Wybór oferty:',
		selectName: 'classes',
		register: register('classes'),
		isInvalid: !!errors.classes,
		optionItemsArray: [
			{ label: '-- wybierz --', value: '', disabled: true },
			{ label: 'Język polski', value: 'jezyk-polski', disabled: false },
			{ label: 'Język angielski', value: 'jezyk-angielski', disabled: false },
			{ label: 'Matematyka', value: 'matematyka', disabled: false },
			{ label: 'Tłumaczenia', value: 'tlumaczenia', disabled: false },
		],
		errorMessage: errors.classes?.message,
	},
];
