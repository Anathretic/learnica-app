import ReCAPTCHA from 'react-google-recaptcha';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import { ContactFormModel } from './contactForm.model';
import { LoginFormModel, RegisterFormModel } from './loginAndRegisterForm.model';
import { ChangePasswordModel } from './userOptions.model';

type Form = ContactFormModel | LoginFormModel | RegisterFormModel | ChangePasswordModel;
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

export interface InputConfigModel {
	label: string;
	inputName: string;
	placeholder: string;
	errorMessage: string | undefined;
	isInvalid: boolean;
	register: ReturnType<UseFormRegister<Form>>;
}

export interface SubmitButtonModel {
	isLoading: boolean;
	buttonText: string;
}

export interface SubmitButtonHookModel {
	initialSubmitButtonState: string;
}

export interface LoaderModel {
	className: string;
}

export interface ReCaptchaV2Model {
	isMobile: boolean;
	refCaptcha: React.RefObject<ReCAPTCHA>;
	errorValue: string;
}
