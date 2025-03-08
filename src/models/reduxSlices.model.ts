import { SlideDataModel } from './blogCarousel.model';

export interface BlogPopupSliceModel {
	showPopup: boolean;
	slideItemData: SlideDataModel | undefined;
}

export interface FormSliceModel {
	isLoading: boolean;
	errorValue: string;
	buttonText: string;
}

export interface ErrorPopupModel {
	value: string;
}
