export type JobCategory = 'lektor' | 'tłumacz' | 'it' | 'inne';

export interface CareerOfferArrayModel {
	id: number;
	title: string;
	description: string;
	category: JobCategory;
}

export interface CareerOfferListItemModel {
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
