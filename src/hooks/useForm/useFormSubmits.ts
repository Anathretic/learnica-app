import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { supabase } from '../../supabase/supabase';
import { useAppDispatch } from '../reduxHooks';
import { useFormHandlers } from './useFormHandlers';
import { useRegisterOptions } from '../useRegisterOptions';
import { setButtonText, setIsLoading } from '../../redux/formReduxSlice/formSlice';
import { setPopupErrorValue } from '../../redux/errorPopupReduxSlice/errorPopupSlice';
import {
	ChangePasswordFormModel,
	ClassesFormModel,
	ContactFormModel,
	FormTypes,
	LoginFormModel,
	RecoverPasswordFormModel,
	RegisterFormModel,
	UseFormSubmitsModel,
} from '../../models/form.model';

export const useFormSubmits = <T extends FormTypes>({ reset, refCaptcha }: UseFormSubmitsModel<T>) => {
	const { isEmailExisting } = useRegisterOptions();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { handleUserActions, handleReCaptcha, handleEmailJs, handleErrors } = useFormHandlers();

	const LoginSubmit: SubmitHandler<LoginFormModel> = async ({ email, password }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		handleUserActions<T>({ error, reset, onSuccessActions: [() => navigate('/panel-uzytkownika')] });
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

			handleUserActions<T>({ error, reset, onSuccessActions: [() => navigate('/')] });
		}
	};

	const RecoverPasswordSubmit: SubmitHandler<RecoverPasswordFormModel> = async ({ email }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${import.meta.env.VITE_RESET_PASSWORD_URL}`,
		});

		handleUserActions<T>({
			error,
			reset,
			onSuccessActions: [
				() => {
					dispatch(setButtonText('Wysłane!'));
					setTimeout(() => {
						dispatch(setButtonText('Wyślij!'));
						navigate('/logowanie');
					}, 2500);
				},
			],
		});
	};

	const ChangePasswordSubmit: SubmitHandler<ChangePasswordFormModel> = async ({ password }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.updateUser({
			password,
		});

		handleUserActions<T>({ error, reset, onSuccessActions: [() => dispatch(setButtonText('Wysłane!'))] });
	};

	const ContactSubmit: SubmitHandler<ContactFormModel> = async ({ firstname, email, message }) => {
		const token = handleReCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const params = {
			firstname,
			email,
			message,
			'g-recaptcha-response': token,
		};

		await handleEmailJs<T>({
			templateID: `${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
			params,
			reset,
		});
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
		const token = handleReCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

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

		await handleEmailJs<T>({
			templateID: `${import.meta.env.VITE_CLASSES_TEMPLATE_ID}`,
			params,
			reset,
		});
	};

	return { LoginSubmit, RegisterSubmit, RecoverPasswordSubmit, ChangePasswordSubmit, ContactSubmit, ClassesSubmit };
};
