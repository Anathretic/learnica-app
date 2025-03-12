import { SlideDataBoxModel } from './blogCarousel.model';

export interface BlogPopupSliceModel {
	showPopup: boolean;
	slideItemData: SlideDataBoxModel | undefined;
}

export interface FormSliceModel {
	isLoading: boolean;
	errorValue: string;
	buttonText: string;
}

export interface ErrorPopupModel {
	value: string;
}
