import ReCAPTCHA from 'react-google-recaptcha';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ContactFormModel } from './contactForm.model';
import { LoginFormModel, RegisterFormModel } from './loginAndRegisterForm.model';
import { ChangePasswordFormModel } from './userOptions.model';

type Form = ContactFormModel | LoginFormModel | RegisterFormModel | ChangePasswordFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;
export interface InputAndTextareaModel {
	label: string;
	inputName: string;
	errorMessage: ErrorMessage;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface LoaderModel {
	className: string;
}

export interface ReCaptchaV2Model {
	refCaptcha: React.RefObject<ReCAPTCHA>;
}
