export type OpinionsDataModel = {
	id: number;
	node: OpinionsDataBoxModel;
};

export interface OpinionsDataBoxModel {
	title: string;
	opinion: string;
	name: string;
}

export interface OpinionsDataBoxPropsModel extends OpinionsDataBoxModel {
	setStopAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}
