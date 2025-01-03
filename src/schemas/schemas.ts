import * as yup from 'yup';
import YupPassword from 'yup-password';
import 'yup-phone-lite';

YupPassword(yup);

const errorMessage = { requiredField: 'To pole jest wymagane!' };

export const contactSchema = yup.object({
	name: yup
		.string()
		.min(5, 'Coś za mało liter!')
		.max(35, 'Chyba trochę za dużo..')
		.minUppercase(1, 'Imię zaczyna się z dużej litery!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Używaj tylko liter!')
		.required(errorMessage.requiredField),
	email: yup.string().email('Wprowadź poprawny e-mail!').required(errorMessage.requiredField),
	message: yup
		.string()
		.min(5, 'Rozpisz się..')
		.max(2500, 'Nie więcej niż 500 słów..')
		.required(errorMessage.requiredField),
});

export const registerSchema = yup.object({
	firstname: yup
		.string()
		.min(3, 'Imię jest zbyt krótkie!')
		.max(16, 'Imię jest zbyt długie!')
		.minUppercase(1, 'Imię zaczyna się dużą literą!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, 'Tylko litery! Bez spacji!')
		.required(errorMessage.requiredField),
	lastname: yup
		.string()
		.min(2, 'Nazwisko jest zbyt krótkie!')
		.max(25, 'Nazwisko jest zbyt długie!')
		.minUppercase(1, 'Nazwisko zaczyna się dużą literą!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Tylko litery!')
		.required(errorMessage.requiredField),
	email: yup.string().email('Wprowadź poprawny e-mail!').required(errorMessage.requiredField),
	phone: yup.string().phone('PL', 'Podaj prawidłowy numer!').required(errorMessage.requiredField),
	password: yup
		.string()
		.min(10, 'Minimum 10 znaków!')
		.minLowercase(1, 'Powinna być 1 mała litera!')
		.minUppercase(1, 'Powinna być 1 duża litera!')
		.minNumbers(1, 'Powinien być 1 symbol!')
		.minSymbols(1, 'Powinien być 1 znak specjalny!')
		.required(errorMessage.requiredField),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Hasła muszą być takie same!')
		.required(errorMessage.requiredField),
});

export const loginSchema = registerSchema.pick(['email', 'password']);
export const resetPasswordSchema = registerSchema.pick(['email']);
export const changePasswordSchema = registerSchema.pick(['password', 'confirmPassword']);
