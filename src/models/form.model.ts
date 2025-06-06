type DefaultFormModel = {
	firstname: string;
	lastname: string;
	email: string;
	message: string;
	phone: string;
	password: string;
	confirmPassword: string;
};

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
