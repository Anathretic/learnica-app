interface SlideTextDataModel {
	node: {
		title: string;
		content: string;
	};
}

export interface SlideDataBoxModel {
	id: number;
	main_title: string;
	public_date: string;
	sectionsCollection: { edges: SlideTextDataModel[] };
}

export interface SlideModel {
	slide: SlideDataBoxModel;
	current: number;
	handleSlideClick: (id: number) => void;
}

export interface SliderModel {
	slides: {
		node: SlideDataBoxModel;
	}[];
}

export interface SliderControlModel {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
}
