import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { setButtonText } from '../../redux/formReduxSlice/formSlice';
import { changePasswordFormInputs } from './config/formsConfig';
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
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(ChangePasswordSubmit)}>
			{changePasswordFormInputs.map((input, id) => {
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
			<Link className='form__change-password-return-btn' to='/panel-uzytkownika'>
				Powrót
			</Link>
		</form>
	);
};
