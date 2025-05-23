import HCaptcha from '@hcaptcha/react-hcaptcha';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ChangePasswordFormModel, ContactFormModel, LoginFormModel, RegisterFormModel } from './form.model';

type Form = ContactFormModel | LoginFormModel | RegisterFormModel | ChangePasswordFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

type OptionItem = {
	value: string;
	label: string;
	disabled: boolean;
};

interface DefaultModel {
	label: string;
	errorMessage: ErrorMessage;
}

export interface InputAndTextareaModel extends DefaultModel {
	inputName: string;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface SelectModel extends DefaultModel {
	selectName: string;
	optionItemsArray: OptionItem[];
	pathname: string;
}

export interface CaptchaModel {
	refCaptcha: React.RefObject<HCaptcha>;
}

export interface SubmitModel {
	classname?: string;
}

export interface LoaderModel {
	className: string;
	provider?: string;
}
