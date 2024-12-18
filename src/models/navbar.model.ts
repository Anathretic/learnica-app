export interface NavbarItemModel {
	title: string;
	section: string;
	classProps?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface LoginIconModel {
	liStyles?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
