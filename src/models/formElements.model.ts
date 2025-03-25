import ReCAPTCHA from 'react-google-recaptcha';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ChangePasswordFormModel, ContactFormModel, LoginFormModel, RegisterFormModel } from './form.model';

type Form = ContactFormModel | LoginFormModel | RegisterFormModel | ChangePasswordFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

interface DefaultModel {
	label: string;
	errorMessage: ErrorMessage;
}

interface OptionItem {
	value: string;
	label: string;
	disabled: boolean;
}

export interface InputAndTextareaModel extends DefaultModel {
	inputName: string;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface LoaderModel {
	className: string;
}

export interface SelectModel extends DefaultModel {
	selectName: string;
	optionItemsArray: OptionItem[];
	pathname: string;
}

export interface ReCaptchaV2Model {
	refCaptcha: React.RefObject<ReCAPTCHA>;
}
