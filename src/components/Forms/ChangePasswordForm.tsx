import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setButtonText, setIsLoading } from '../../redux/formReduxSlice/formSlice';
import { setPopupErrorValue } from '../../redux/errorPopupReduxSlice/errorPopupSlice';
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

	const dispatch = useAppDispatch();
	const changePasswordInputs = changePasswordInputsConfig(errors, register);

	const onSubmit: SubmitHandler<ChangePasswordFormModel> = async ({ password }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.updateUser({
			password,
		});

		if (!error) {
			reset();
			dispatch(setIsLoading(false));
			dispatch(setButtonText('Wysłane!'));
		} else {
			dispatch(setIsLoading(false));
			dispatch(setPopupErrorValue('Coś poszło nie tak.. Spróbuj ponownie!'));
		}
	};

	useEffect(() => {
		dispatch(setButtonText('Wyślij'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
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
