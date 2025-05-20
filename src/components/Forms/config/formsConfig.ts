import {
	confirmPasswordField,
	emailField,
	firstnameField,
	lastnameField,
	locationSelect,
	offerSelect,
	passwordField,
	phoneField,
} from './inputsConfig';
import {
	ChangePasswordFormModel,
	ClassesFormModel,
	ContactFormModel,
	LoginFormModel,
	RecoverPasswordFormModel,
	RegisterFormModel,
} from '../../../models/form.model';
import { InputAndTextareaConfigModel, SelectConfigModel } from '../../../models/inputConfig.model';

export const contactFormInputs: InputAndTextareaConfigModel<ContactFormModel>[] = [
	firstnameField('firstname'),
	emailField('email'),
];

export const classesFormInputs: InputAndTextareaConfigModel<ClassesFormModel>[] = [
	firstnameField('firstname'),
	lastnameField('lastname'),
	emailField('email'),
	phoneField('phone'),
];

export const classesFormSelects: SelectConfigModel<ClassesFormModel>[] = [
	offerSelect('classes'),
	locationSelect('classesLocation'),
];

export const loginFormInputs: InputAndTextareaConfigModel<LoginFormModel>[] = [
	emailField('email'),
	passwordField('password'),
];

export const registerFormInputs: InputAndTextareaConfigModel<RegisterFormModel>[] = [
	firstnameField('firstname'),
	lastnameField('lastname'),
	emailField('email'),
	phoneField('phone'),
	passwordField('password'),
	confirmPasswordField('confirmPassword'),
];

export const recoverPasswordFormInputs: InputAndTextareaConfigModel<RecoverPasswordFormModel>[] = [emailField('email')];

export const changePasswordFormInputs: InputAndTextareaConfigModel<ChangePasswordFormModel>[] = [
	passwordField('password'),
	confirmPasswordField('confirmPassword'),
];
