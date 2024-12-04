import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase';
import { UserData } from '../models/userData.model';

const UserPanel: React.FC = () => {
	const [mail, setMail] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const { data, error } = await supabase.from('user-data').select();

		if (data?.length === 0) navigate('/');

		if (!error) setMail(data?.map((userData: UserData) => userData.email).toString());
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
		<section>
			<h2>UserPanel</h2>
			<p>{mail}</p>
			<button type='button' onClick={logout}>
				Logout
			</button>
		</section>
	);
};

export default UserPanel;
