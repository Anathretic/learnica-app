export interface RegisterData {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}

export interface LoginData {
	email: string;
	password: string;
}
