export interface NavbarItemModel {
	title: string;
	section: string;
	classProps?: string;
	isScrolled?: boolean;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface LoginIconModel {
	liStyles: string;
	isScrolled?: boolean;
}
