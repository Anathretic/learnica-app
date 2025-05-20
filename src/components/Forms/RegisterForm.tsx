import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { setButtonText } from '../../redux/formReduxSlice/formSlice';
import { registerFormInputs } from './config/formsConfig';
import { registerSchema } from '../../schemas/schemas';
import { RegisterFormModel } from '../../models/form.model';

export const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterFormModel>({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerSchema),
	});

	const { RegisterSubmit } = useFormSubmits<RegisterFormModel>({ reset });
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setButtonText('Zarejestruj się'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(RegisterSubmit)}>
			{registerFormInputs.map((input, id) => {
				const error = errors[input.inputName];
				return (
					<InputElement
						key={id}
						label={input.label}
						inputName={input.inputName}
						type={input.type}
						placeholder={input.placeholder}
						errorMessage={error?.message as string}
						aria-invalid={!!error}
						{...register(input.inputName)}
					/>
				);
			})}
			<FormSubmit />
		</form>
	);
};
