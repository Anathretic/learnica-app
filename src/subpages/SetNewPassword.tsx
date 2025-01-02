import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../supabase/supabase';
import { FormSubmit, InputElement } from '../components/InputAndTextarea';
import { SetNewPasswordModel } from '../models/loginAndRegister.model';
import { setNewPasswordSchema } from '../schemas/schemas';

const SetNewPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SetNewPasswordModel>({
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(setNewPasswordSchema),
	});

	const onSubmit: SubmitHandler<SetNewPasswordModel> = async ({ password }) => {
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
		<section className='new-password'>
			<div className='new-password__container white-gradient'>
				<h2 className='new-password__title'>Ustaw nowe hasło</h2>
				<hr className='new-password__strap' />
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

export default SetNewPassword;
