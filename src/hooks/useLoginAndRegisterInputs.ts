import { useState } from 'react';
import { Inputs } from '../models/input.model';

const initialValues: Inputs = {
	email: '',
	password: '',
};

export const useLoginAndRegisterInputs = () => {
	const [values, setValues] = useState(initialValues);

	const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;

		setValues({ ...values, [name]: value });
	};

	return { values, setValues, handleInputValue };
};
