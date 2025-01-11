import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactFormModel } from '../../../models/contactForm.model';
import { LoginFormModel, RegisterFormModel } from '../../../models/loginAndRegisterForm.model';
import { ChangePasswordFormModel } from '../../../models/userOptions.model';

export const contactFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<ContactFormModel>) => [
	{
		label: 'Imię i nazwisko:',
		inputName: 'name',
		type: 'text',
		placeholder: 'Wprowadź imię i nazwisko..',
		errorMessage: errors.name?.message,
		isInvalid: !!errors.name,
		register: register('name'),
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
