import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { supabase } from '../supabase/supabase';
import { useAppDispatch } from './reduxHooks';
import { useRegisterOptions } from './useRegisterOptions';
import { setButtonText, setErrorValue, setIsLoading } from '../redux/formReduxSlice/formSlice';
import { setPopupErrorValue } from '../redux/errorPopupReduxSlice/errorPopupSlice';
import {
	ChangePasswordFormModel,
	ClassesFormModel,
	ContactFormModel,
	FormTypes,
	LoginFormModel,
	RecoverPasswordFormModel,
	RegisterFormModel,
	UseFormSubmitsModel,
} from '../models/form.model';

export const useFormSubmits = <T extends FormTypes>({ reset, refCaptcha }: UseFormSubmitsModel<T>) => {
	const { isEmailExisting } = useRegisterOptions();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const LoginSubmit: SubmitHandler<LoginFormModel> = async ({ email, password }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (!error) {
			reset();
			dispatch(setIsLoading(false));
			navigate('/panel-uzytkownika');
		} else {
			dispatch(setIsLoading(false));
			dispatch(setPopupErrorValue('Coś poszło nie tak.. Spróbuj ponownie!'));
		}
	};

	const RegisterSubmit: SubmitHandler<RegisterFormModel> = async ({ firstname, lastname, email, phone, password }) => {
		dispatch(setIsLoading(true));

		const emailExists = await isEmailExisting(email);

		if (emailExists) {
			dispatch(setIsLoading(false));
			dispatch(setPopupErrorValue('Konto z takim adresem e-mail już istnieje!'));
		} else {
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						first_name: firstname,
						last_name: lastname,
						phone_number: phone,
					},
				},
			});

			if (!error) {
				reset();
				dispatch(setIsLoading(false));
				navigate('/');
			} else {
				dispatch(setIsLoading(false));
				dispatch(setPopupErrorValue('Coś poszło nie tak.. Spróbuj ponownie!'));
			}
		}
	};

	const RecoverPasswordSubmit: SubmitHandler<RecoverPasswordFormModel> = async ({ email }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${import.meta.env.VITE_RESET_PASSWORD_URL}`,
		});

		if (!error) {
			reset();
			dispatch(setIsLoading(false));
			dispatch(setButtonText('Wysłane!'));
			setTimeout(() => {
				dispatch(setButtonText('Wyślij!'));
				navigate('/logowanie');
			}, 2500);
		} else {
			dispatch(setIsLoading(false));
			dispatch(setPopupErrorValue('Coś poszło nie tak.. Spróbuj ponownie!'));
		}
	};

	const ChangePasswordSubmit: SubmitHandler<ChangePasswordFormModel> = async ({ password }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.updateUser({
			password,
		});

		if (!error) {
			reset();
			dispatch(setIsLoading(false));
			dispatch(setButtonText('Wysłane!'));
		} else {
			dispatch(setIsLoading(false));
			dispatch(setPopupErrorValue('Coś poszło nie tak.. Spróbuj ponownie!'));
		}
	};

	const ContactSubmit: SubmitHandler<ContactFormModel> = async ({ firstname, email, message }) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstname,
			email,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					dispatch(setButtonText('Wysłane!'));
				})
				.catch(err => {
					dispatch(setErrorValue('Coś poszło nie tak..'));
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					dispatch(setIsLoading(false));
				});
		} else {
			dispatch(setIsLoading(false));
			dispatch(setErrorValue('Nie bądź 🤖!'));
		}
	};

	const ClassesSubmit: SubmitHandler<ClassesFormModel> = async ({
		firstname,
		lastname,
		email,
		phone,
		classes,
		classesLocation,
		message,
	}) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstname,
			lastname,
			email,
			phone,
			classes,
			classesLocation,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_CLASSES_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					reset();
					dispatch(setButtonText('Wysłane!'));
				})
				.catch(err => {
					dispatch(setErrorValue('Coś poszło nie tak..'));
					if (err instanceof Error) {
						console.log(`Twój błąd: ${err.message}`);
					}
				})
				.finally(() => {
					dispatch(setIsLoading(false));
				});
		} else {
			dispatch(setIsLoading(false));
			dispatch(setErrorValue('Nie bądź 🤖!'));
		}
	};

	return { LoginSubmit, RegisterSubmit, RecoverPasswordSubmit, ChangePasswordSubmit, ContactSubmit, ClassesSubmit };
};
