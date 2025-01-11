export interface ChangePasswordComponentModel {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	buttonText: string;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
}

export interface ChangePasswordFormModel {
	password: string;
	confirmPassword: string;
}
