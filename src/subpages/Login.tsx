import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase';
import { useLoginAndRegisterInputs } from '../hooks/useLoginAndRegisterInputs';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';

const Login: React.FC = () => {
	const { values, setValues, handleInputValue } = useLoginAndRegisterInputs();
	const { checkSessionStatus } = useCheckSessionStatus();

	const navigate = useNavigate();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error } = await supabase.auth.signInWithPassword({
			email: values.email,
			password: values.password,
		});

		if (!error) {
			setValues({ email: '', password: '' });
			navigate('/user-panel');
		} else {
			console.log(error);
		}
	};

	return (
		<section>
			<h2>Login</h2>
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
				<button type='submit'>Sign in</button>
			</form>
		</section>
	);
};

export default Login;
