import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase';

const UserPanel: React.FC = () => {
	const [mail, setMail] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const { data } = await supabase.auth.getUser();

		setMail(data.user?.user_metadata.email);
	};

	const logout = async () => {
		const { error } = await supabase.auth.signOut();

		if (!error) {
			navigate('/');
		} else {
			console.log(error);
		}
	};

	return (
		<div>
			<h2>UserPanel</h2>
			<p>{mail}</p>
			<button type='button' onClick={logout}>
				Logout
			</button>
		</div>
	);
};

export default UserPanel;
