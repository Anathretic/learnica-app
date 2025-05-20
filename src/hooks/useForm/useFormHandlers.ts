import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAppDispatch } from '../reduxHooks';
import { setErrorValue, setIsLoading, setButtonText } from '../../redux/formReduxSlice/formSlice';
import { setPopupErrorValue } from '../../redux/errorPopupReduxSlice/errorPopupSlice';
import { HandleEmailJsModel, HandleUserActionsModel } from '../../models/form.model';

export const useFormHandlers = () => {
	const dispatch = useAppDispatch();

	const handleUserActions = <TFormData extends object>({
		error,
		reset,
		onSuccessActions,
	}: HandleUserActionsModel<TFormData>) => {
		if (!error) {
			reset();
			dispatch(setIsLoading(false));
			onSuccessActions.forEach(fn => fn());
		} else {
			dispatch(setIsLoading(false));
			dispatch(setPopupErrorValue('Coś poszło nie tak.. Spróbuj ponownie!'));
		}
	};

	const handleReCaptcha = (refCaptcha: React.RefObject<ReCAPTCHA> | undefined) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		if (!refCaptcha?.current) {
			return null;
		}

		const token = refCaptcha.current.getValue();
		refCaptcha.current.reset();

		return token || null;
	};

	const handleEmailJs = async <TFormData extends object>({
		templateID,
		params,
		reset,
	}: HandleEmailJsModel<TFormData>) => {
		try {
			await emailjs.send(
				`${import.meta.env.VITE_SERVICE_ID}`,
				`${templateID}`,
				params,
				`${import.meta.env.VITE_PUBLIC_KEY}`
			);
			reset();
			dispatch(setButtonText('Wysłane!'));
		} catch (err) {
			dispatch(setErrorValue('Coś poszło nie tak..'));
			if (err instanceof Error) {
				console.log(`Twój błąd: ${err.message}`);
			}
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	const handleErrors = () => {
		dispatch(setIsLoading(false));
		dispatch(setErrorValue('Nie bądź 🤖!'));
	};

	return { handleUserActions, handleReCaptcha, handleEmailJs, handleErrors };
};
