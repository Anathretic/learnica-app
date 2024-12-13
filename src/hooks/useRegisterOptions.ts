import { supabase } from '../supabase/supabase';

export const useRegisterOptions = () => {
	const isEmailExisting = async (newUserEmail: string) => {
		const { data } = await supabase.from('userdataEmail').select('email');

		const existingEmails = data?.map(data => data.email);

		return existingEmails?.includes(newUserEmail) ?? false;
	};

	return { isEmailExisting };
};
