import { useState, useEffect } from 'react';
import { SubmitButtonHookModel } from '../models/formElements.model';

export const useSubmitFormButton = ({ initialSubmitButtonState }: SubmitButtonHookModel) => {
	const [buttonText, setButtonText] = useState(initialSubmitButtonState);

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;
		if (buttonText !== initialSubmitButtonState && initialSubmitButtonState === 'Wyślij') {
			timeout = setTimeout(() => setButtonText(initialSubmitButtonState), 2500);
		}
		return () => clearTimeout(timeout);
	}, [buttonText]);

	return [buttonText, setButtonText] as const;
};
