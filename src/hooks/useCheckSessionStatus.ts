import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase';

export const useCheckSessionStatus = () => {
	const navigate = useNavigate();

	const checkSessionStatus = async () => {
		const { data } = await supabase.auth.getSession();

		if (data.session?.user.id !== undefined) {
			navigate('/panel-uzytkownika');
		}
	};

	const checkUserStatus = async () => {
		const { data } = await supabase.auth.getSession();

		if (!data.session?.user.id) {
			navigate('/logowanie');
		}
	};

	return { checkSessionStatus, checkUserStatus };
};
