import { CareerOfferArrayModel } from '../models/career.model';

export const jobOffersData: CareerOfferArrayModel[] = [
	{
		id: 1,
		title: 'Lektor języka angielskiego',
		description: 'Poszukujemy lektora..',
		category: 'lektor',
	},
	{ id: 2, title: 'Tłumacz polsko-angielski', description: 'Zlecenia tłumaczeń dokumentów...', category: 'tłumacz' },
	{ id: 3, title: 'Frontend Developer', description: 'Rozwój apliakcji React...', category: 'it' },
	{ id: 4, title: 'Asystent biura', description: 'Wsparcie administracyjne...', category: 'inne' },
];
