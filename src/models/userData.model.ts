interface DefaultUserDataModel {
	id: number;
}

export interface UserDataBoxModel extends DefaultUserDataModel {
	user_id: string;
	created_at: string;
	email: string;
}

export interface UserDataModel extends DefaultUserDataModel {
	node: UserDataBoxModel;
}
