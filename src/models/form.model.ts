import { AuthError } from '@supabase/supabase-js';
import ReCAPTCHA from 'react-google-recaptcha';
import { UseFormReset } from 'react-hook-form';

type DefaultFormModel = {
	firstname: string;
	lastname: string;
	email: string;
	message: string;
	phone: string;
	password: string;
	confirmPassword: string;
};

export type EmailJsParams = Record<string, string>;

// --------------- useFormSubmits ------------------------

export type FormTypes =
	| LoginFormModel
	| RegisterFormModel
	| RecoverPasswordFormModel
	| ChangePasswordFormModel
	| ClassesFormModel
	| ContactFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	refCaptcha?: React.RefObject<ReCAPTCHA>;
}

// -------------------------------------------------------

// --------------- useFormHandlers -----------------------

export interface HandleEmailJsModel<TFormData extends object> {
	templateID: string;
	params: Record<string, unknown>;
	reset: UseFormReset<TFormData>;
}

export interface HandleUserActionsModel<TFormData extends object> {
	error: AuthError | null;
	reset: UseFormReset<TFormData>;
	onSuccessActions: (() => void)[];
}

// -------------------------------------------------------

type ClassesLocationModel = 'hrubieszow' | 'lublin' | 'zamosc' | 'online' | '';

export type ClassesModel = 'jezyk-polski' | 'jezyk-angielski' | 'matematyka' | 'tlumaczenia' | '';

export type ContactFormModel = Pick<DefaultFormModel, 'firstname' | 'email' | 'message'>;

export type RegisterFormModel = Pick<
	DefaultFormModel,
	'firstname' | 'lastname' | 'email' | 'phone' | 'password' | 'confirmPassword'
>;

export type LoginFormModel = Pick<DefaultFormModel, 'email' | 'password'>;

export type RecoverPasswordFormModel = Pick<DefaultFormModel, 'email'>;

export type ChangePasswordFormModel = Pick<DefaultFormModel, 'password' | 'confirmPassword'>;

export type ClassesFormModel = Pick<DefaultFormModel, 'firstname' | 'lastname' | 'email' | 'message' | 'phone'> & {
	classes: ClassesModel;
	classesLocation?: ClassesLocationModel;
};
