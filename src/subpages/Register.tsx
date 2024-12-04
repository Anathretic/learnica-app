import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase';
import { useLoginAndRegisterInputs } from '../hooks/useLoginAndRegisterInputs';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';

const Register: React.FC = () => {
	const { values, setValues, handleInputValue } = useLoginAndRegisterInputs();
	const { checkSessionStatus } = useCheckSessionStatus();

	const navigate = useNavigate();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error } = await supabase.auth.signUp({
			email: values.email,
			password: values.password,
			options: {
				data: {
					first_name: 'John',
					age: 27,
				},
			},
		});

		if (!error) {
			setValues({ email: '', password: '' });
			navigate('/');
		} else if (error) {
			console.log(error);
		}
	};

	return (
		<section>
			<h2>Register</h2>
			<form onSubmit={onSubmit}>
				<input type='text' name='email' placeholder='e-mail' onChange={handleInputValue} value={values.email} />
				<br />
				<input
					type='password'
					name='password'
					placeholder='password'
					onChange={handleInputValue}
					value={values.password}
				/>
				<button type='submit'>Sign up</button>
			</form>
		</section>
	);
};

export default Register;
