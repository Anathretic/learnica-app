import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useAppDispatch } from '../reduxHooks';
import { setErrorValue, setIsLoading, setButtonText } from '../../redux/formReduxSlice/formSlice';
import { setPopupErrorValue } from '../../redux/errorPopupReduxSlice/errorPopupSlice';
import { HandleFormcarryModel, HandleUserActionsModel } from '../../models/useFormHooks.model';

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

	const handleHCaptcha = (refCaptcha: React.RefObject<HCaptcha> | undefined) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		if (!refCaptcha?.current) return undefined;

		const token = refCaptcha.current.getResponse();
		refCaptcha.current.resetCaptcha();

		return token || undefined;
	};

	const handleFormcarry = async <TFormData extends object>({ formData, reset }: HandleFormcarryModel<TFormData>) => {
		try {
			dispatch(setIsLoading(true));

			const response = await fetch(`${import.meta.env.VITE_FORMCARRY_ENDPOINT}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (result.code === 200) {
				reset();
				dispatch(setButtonText('Wysłane!'));
			} else {
				dispatch(setErrorValue('Coś poszło nie tak...'));
			}
		} catch (err) {
			dispatch(setErrorValue('Coś poszło nie tak...'));
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

	return { handleUserActions, handleHCaptcha, handleFormcarry, handleErrors };
};
