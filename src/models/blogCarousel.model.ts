interface SlideTextDataModel {
	title: string;
	content: string;
}

export interface SlideDataModel {
	id: number;
	main_title: string;
	public_date: string;
	sections: SlideTextDataModel[];
}

export interface SlideModel {
	slide: SlideDataModel;
	current: number;
	handleSlideClick: (id: number) => void;
}

export interface SliderModel {
	slides: SlideDataModel[];
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}

export interface GetBlogDataModel {
	setSlides: React.Dispatch<React.SetStateAction<SlideDataModel[]>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}
