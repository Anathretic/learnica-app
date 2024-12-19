export interface UserDataBoxModel {
	id: number;
	user_id: string;
	created_at: string;
	email: string;
}

export interface UserDataModel {
	id: number;
	node: UserDataBoxModel;
}
