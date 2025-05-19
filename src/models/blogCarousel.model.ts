type SlideTextDataModel = {
	node: {
		title: string;
		content: string;
	};
};

export type SliderControlModel = {
	type: 'previous' | 'next';
	title: string;
	handleClick: () => void;
};

export type SlideModel = {
	slide: SlideDataBoxModel;
	current: number;
	handleSlideClick: (id: number) => void;
};

export interface SlideDataBoxModel {
	id: number;
	main_title: string;
	public_date: string;
	sectionsCollection: { edges: SlideTextDataModel[] };
}

export interface SliderModel {
	slides: {
		node: SlideDataBoxModel;
	}[];
}
