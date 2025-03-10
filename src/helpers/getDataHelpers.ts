import { supabase } from '../supabase/supabase';
import { GetBlogDataModel } from '../models/blogCarousel.model';
import { GetOpinionDataModel } from '../models/opinions.model';

const cacheExpiry = 60 * 30 * 1000;

export const getBlogData = async ({ setSlides, setIsLoading, setError }: GetBlogDataModel): Promise<void> => {
	const cachedData = localStorage.getItem('blogData');
	const cachedTimestamp = localStorage.getItem('blogDataTimestamp');

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
			throw new Error('Wystąpił nieoczekiwany błąd.. Spróbuj ponownie pobrać dane bloga..');
		}

		setSlides(data);

		localStorage.setItem('blogData', JSON.stringify(data));
		localStorage.setItem('blogDataTimestamp', Date.now().toString());

		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	} catch (err) {
		if (err instanceof Error) {
			console.error('Błąd pobierania danych bloga: ', err);
			setError(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	}
};

export const getOpinionData = async ({ setOpinions, setError }: GetOpinionDataModel): Promise<void> => {
	const cachedData = localStorage.getItem('opinionData');
	const cachedTimestamp = localStorage.getItem('opinionDataTimestamp');

	if (cachedData && cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < cacheExpiry) {
		setOpinions(JSON.parse(cachedData));
		return;
	}

	try {
		const { data, error } = await supabase
			.from(import.meta.env.VITE_SECOND_ARRAY_NAME)
			.select('id, title, opinion, name')
			.order('created_at', { ascending: true });

		if (error) {
			setError(true);
			throw new Error('Wystąpił nieoczekiwany błąd.. Nie można pobrać opinii..');
		}

		setOpinions(data);

		localStorage.setItem('opinionData', JSON.stringify(data));
		localStorage.setItem('opinionDataTimestamp', Date.now().toString());
	} catch (err) {
		if (err instanceof Error) {
			console.error('Błąd pobierania danych opinii: ', err);
			setError(true);
		}
	}
};
