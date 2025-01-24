export interface NavbarItemModel {
	title: string;
	section: string;
	classProps?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface NavbarTitleModel {
	divRef: React.MutableRefObject<HTMLDivElement | null>;
}

export interface LoginIconModel {
	liStyles?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
