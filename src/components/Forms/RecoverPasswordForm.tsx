import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits';
import { setButtonText } from '../../redux/formReduxSlice/formSlice';
import { recoverPasswordSchema } from '../../schemas/schemas';
import { RecoverPasswordFormModel } from '../../models/form.model';

export const RecoverPasswordForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RecoverPasswordFormModel>({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(recoverPasswordSchema),
	});

	const { RecoverPasswordSubmit } = useFormSubmits<RecoverPasswordFormModel>({ reset });
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(RecoverPasswordSubmit)}>
			<p className='form__special-text'>
				Jeśli zapomniałeś hasło prześlij swój email, a dostaniesz link by je zresetować. Działa tylko w wypadku
				<span> posiadania konta </span>w serwisie!
			</p>
			<InputElement
				label='E-mail:'
				inputName='email'
				type='text'
				placeholder='Wprowadź adres e-mail..'
				errorMessage={errors.email?.message}
				aria-invalid={errors.email ? true : false}
				{...register('email')}
			/>
			<FormSubmit />
		</form>
	);
};
