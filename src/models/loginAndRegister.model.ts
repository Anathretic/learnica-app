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

export interface FormComponentModel {
	setPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ResetPasswordModel {
	email: string;
}
