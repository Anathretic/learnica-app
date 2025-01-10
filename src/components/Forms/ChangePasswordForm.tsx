import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from './components/FormElements';
import { changePasswordInputsConfig } from './inputsConfig/inputsConfig';
import { ChangePasswordComponentModel, ChangePasswordModel } from '../../models/userOptions.model';
import { changePasswordSchema } from '../../schemas/schemas';

export const ChangePasswordForm: React.FC<ChangePasswordComponentModel> = ({
	isLoading,
	setIsLoading,
	buttonText,
	setButtonText,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ChangePasswordModel>({
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(changePasswordSchema),
	});

	const changePasswordInputs = changePasswordInputsConfig(errors, register);

	const onSubmit: SubmitHandler<ChangePasswordModel> = async ({ password }) => {
		setIsLoading(true);

		const { error } = await supabase.auth.updateUser({
			password,
		});

		if (!error) {
			reset();
			setIsLoading(false);
			setButtonText('Wysłane!');
		} else {
			console.log(error);
		}
	};

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
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
		</form>
	);
};
