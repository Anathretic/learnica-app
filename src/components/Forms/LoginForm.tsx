import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { supabase } from '../../supabase/supabase';
import { FormSubmit, InputElement } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setButtonText, setIsLoading } from '../../redux/formReduxSlice/FormSlice';
import { loginFormInputsConfig } from './inputsConfig/inputsConfig';
import { LoginFormModel } from '../../models/loginAndRegisterForm.model';
import { loginSchema } from '../../schemas/schemas';
import { scrollToTop } from '../../utils/scrollToTopUtils';

export const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormModel>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const loginFormInputs = loginFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<LoginFormModel> = async ({ email, password }) => {
		dispatch(setIsLoading(true));

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (!error) {
			reset();
			dispatch(setIsLoading(false));
			navigate('/panel-uzytkownika');
		} else {
			dispatch(setIsLoading(false));
			console.log(error);
		}
	};

	useEffect(() => {
		dispatch(setButtonText('Zaloguj się'));
	}, []);

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			{loginFormInputs.map((input, id) => (
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
			<div className='form__password-recover-box'>
				<Link to='/odzyskiwanie-hasla' className='form__password-recover-btn' onClick={scrollToTop}>
					Nie pamiętasz hasła?
				</Link>
			</div>
			<FormSubmit />
		</form>
	);
};
