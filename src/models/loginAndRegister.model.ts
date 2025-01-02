export interface RegisterDataModel {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}

export interface LoginDataModel {
	email: string;
	password: string;
}

export interface ResetPasswordComponentModel {
	setPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ResetPasswordModel {
	email: string;
}

export interface SetNewPasswordModel {
	password: string;
	confirmPassword: string;
}
