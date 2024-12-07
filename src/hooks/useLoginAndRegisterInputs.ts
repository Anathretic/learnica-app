import { useState } from 'react';
import { LoginAndRegister } from '../models/loginAndRegister.model';

const initialValues: LoginAndRegister = {
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
