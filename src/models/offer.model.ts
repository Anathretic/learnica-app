type PlusesArrayModel = {
	node: {
		id: number;
		content: string;
	};
};

export type OfferDataModel = {
	id: number;
	node: OfferBoxModel;
};

export interface OfferBoxModel {
	id: number;
	subpage: string;
	text: string;
	title: string;
	price: string;
	offerItemsCollection: { edges: PlusesArrayModel[] };
}
