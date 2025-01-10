import { NavigateFunction } from 'react-router-dom';

export interface RegisterComponentModel {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	isEmailExisting: (newUserEmail: string) => Promise<boolean>;
	navigate: NavigateFunction;
}

export interface RegisterFormModel {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}

export interface LoginComponentModel {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
}

export interface LoginFormModel {
	email: string;
	password: string;
}

export interface ResetPasswordComponentModel {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	buttonText: string;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	setPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ResetPasswordFormModel {
	email: string;
}
