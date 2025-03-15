interface PlusesArrayModel {
	node: {
		id: number;
		content: string;
	};
}

export interface OfferBoxModel {
	subpage: string;
	text: string;
	title: string;
	price: string;
	offerItemsCollection: { edges: PlusesArrayModel[] };
}

export interface OfferDataModel {
	id: number;
	node: OfferBoxModel;
}
