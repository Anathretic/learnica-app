export interface RegisterFormModel {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}

export interface LoginFormModel {
	email: string;
	password: string;
}

export interface RecoverPasswordFormModel {
	email: string;
}
