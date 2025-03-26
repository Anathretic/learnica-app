import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useFormSubmits';
import { setButtonText } from '../../redux/formReduxSlice/formSlice';
import { changePasswordInputsConfig } from './inputsConfig/inputsConfig';
import { changePasswordSchema } from '../../schemas/schemas';
import { ChangePasswordFormModel } from '../../models/form.model';

export const ChangePasswordForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ChangePasswordFormModel>({
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(changePasswordSchema),
	});

	const { ChangePasswordSubmit } = useFormSubmits<ChangePasswordFormModel>({ reset });
	const changePasswordInputs = changePasswordInputsConfig(errors, register);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(ChangePasswordSubmit)}>
			{changePasswordInputs.map((input, id) => (
				<InputElement
					key={id}
					label={input.label}
					inputName={input.inputName}
					type={input.type}
					placeholder={input.placeholder}
					errorMessage={input.errorMessage}
					aria-invalid={input.isInvalid}
					{...input.register}
				/>
			))}
			<FormSubmit />
		</form>
	);
};
