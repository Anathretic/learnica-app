import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabase/supabase';
import { FormSubmit, InputElement } from '../components/InputAndTextarea';
import { ChangePasswordModel } from '../models/userOptions.model';
import { changePasswordSchema } from '../schemas/schemas';

const ChangePassword: React.FC = () => {
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

	const onSubmit: SubmitHandler<ChangePasswordModel> = async ({ password }) => {
		const { error } = await supabase.auth.updateUser({
			password,
		});

		if (!error) {
			reset();
		} else {
			console.log(error);
		}
	};

	return (
		<section className='change-password'>
			<div className='change-password__container white-gradient'>
				<h2 className='change-password__title'>Ustaw nowe hasło</h2>
				<hr className='change-password__strap' />
				<form className='form' onSubmit={handleSubmit(onSubmit)}>
					<InputElement
						label='Hasło:'
						inputName='password'
						type='password'
						placeholder='Wprowadź hasło..'
						children={errors.password?.message}
						aria-invalid={errors.password ? true : false}
						{...register('password')}
					/>
					<InputElement
						label='Powtórz hasło:'
						inputName='confirmPassword'
						type='password'
						placeholder='Wprowadź ponownie hasło..'
						children={errors.confirmPassword?.message}
						aria-invalid={errors.confirmPassword ? true : false}
						{...register('confirmPassword')}
					/>
					<FormSubmit value='Wyślij' />
				</form>
			</div>
		</section>
	);
};

export default ChangePassword;
