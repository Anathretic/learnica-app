interface DefaultNavbarModel {
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface NavbarItemModel extends DefaultNavbarModel {
	title: string;
	section: string;
	classProps?: string;
}

export interface NavbarTitleModel {
	divRef: React.MutableRefObject<HTMLDivElement | null>;
}

export interface LoginIconModel extends DefaultNavbarModel {
	liStyles?: string;
}
