import ReCAPTCHA from 'react-google-recaptcha';

export interface ContactComponentModel {
	name: string;
	email: string;
	message: string;
}

export interface ContactFormModel {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	errorValue: string;
	setErrorValue: React.Dispatch<React.SetStateAction<string>>;
	buttonText: string;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	isMobile: boolean;
	refCaptcha: React.RefObject<ReCAPTCHA>;
}
