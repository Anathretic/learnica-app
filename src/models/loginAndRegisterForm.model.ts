import { NavigateFunction } from 'react-router-dom';

export interface RegisterComponentModel {
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
	setPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
}

export interface LoginFormModel {
	email: string;
	password: string;
}

export interface ResetPasswordModel {
	email: string;
}
