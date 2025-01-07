import ReCAPTCHA from 'react-google-recaptcha';
export interface InputAndTextareaModel {
	label: string;
	inputName: string;
	children: React.ReactNode;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface SubmitButtonModel {
	value: string;
}

export interface LoaderModel {
	className: string;
}

export interface ReCaptchaV2Model {
	isMobile: boolean;
	refCaptcha: React.RefObject<ReCAPTCHA>;
	errorValue: string;
}
