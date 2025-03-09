import { supabase } from '../supabase/supabase';
import { GetBlogDataModel } from '../models/blogCarousel.model';

export const getBlogData = async ({ setSlides, setIsLoading, setError }: GetBlogDataModel): Promise<void> => {
	const cachedData = localStorage.getItem('blogData');
	const cachedTimestamp = localStorage.getItem('blogDataTimestamp');
	const cacheExpiry = 60 * 30 * 1000;

	if (cachedData && cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < cacheExpiry) {
		setSlides(JSON.parse(cachedData));
		setIsLoading(false);
		return;
	}

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

		localStorage.setItem('blogData', JSON.stringify(data));
		localStorage.setItem('blogDataTimestamp', Date.now().toString());

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
