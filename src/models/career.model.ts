export type JobCategory = 'lektor' | 'tłumacz' | 'it' | 'inne';

export interface CareerOfferArrayModel {
	id: number;
	href: string;
	title: string;
	date: string;
	description: string;
	category: JobCategory;
	firstSubtitle: string;
	firstParagraph: string;
	secondSubtitle: string;
	secondParagraph: string;
	thirdSubtitle: string;
	thirdParagraph: string;
}

export interface CareerOfferListItemModel {
	href: string;
	title: string;
	description: string;
}

export interface SearchInputModel {
	searchTerm: string;
	setSearchTerm: (value: React.SetStateAction<string>) => void;
}

export interface SearchSelectModel {
	selectedCategory: string;
	setSelectedCategory: (value: React.SetStateAction<JobCategory | 'all'>) => void;
}
