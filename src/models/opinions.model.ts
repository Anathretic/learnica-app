export interface OpinionDataModel {
	title: string;
	opinion: string;
	name: string;
}

export interface GetOpinionDataModel {
	setOpinions: React.Dispatch<React.SetStateAction<OpinionDataModel[]>>;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}
