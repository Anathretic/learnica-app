import { AuthError } from '@supabase/supabase-js';
import { UseFormReset } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
	ChangePasswordFormModel,
	ClassesFormModel,
	ContactFormModel,
	LoginFormModel,
	RecoverPasswordFormModel,
	RegisterFormModel,
} from './form.model';

export type FormTypes =
	| LoginFormModel
	| RegisterFormModel
	| RecoverPasswordFormModel
	| ChangePasswordFormModel
	| ClassesFormModel
	| ContactFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	refCaptcha?: React.RefObject<HCaptcha>;
}

export interface HandleFormcarryModel<TFormData extends object> {
	formData: TFormData;
	reset: () => void;
}

export interface HandleUserActionsModel<TFormData extends object> {
	error: AuthError | null;
	reset: UseFormReset<TFormData>;
	onSuccessActions: (() => void)[];
}
