export interface UserDataBox {
	id: number;
	user_id: string;
	created_at: string;
	email: string;
}

export interface UserData {
	id: number;
	node: UserDataBox;
}
