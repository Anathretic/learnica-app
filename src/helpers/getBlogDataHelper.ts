import { supabase } from '../supabase/supabase';
import { GetBlogDataModel } from '../models/blogCarousel.model';

export const getBlogData = async ({ setSlides, setIsLoading, setError }: GetBlogDataModel): Promise<void> => {
	try {
		const { data, error } = await supabase
			.from(import.meta.env.VITE_ARRAY_NAME)
			.select('id, main_title, public_date, sections(title, content)')
			.order('public_date', { ascending: true });

		if (error) {
			setError(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
			throw new Error('Wystąpił nieoczekiwany błąd.. Spróbuj ponownie..');
		}

		setSlides(data);

		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	} catch (err) {
		if (err instanceof Error) {
			console.error('Błąd pobierania danych: ', err);
			setError(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	}
};
