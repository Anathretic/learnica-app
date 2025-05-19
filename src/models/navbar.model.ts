type DefaultNavbarModel = {
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type NavbarTitleModel = {
	divRef: React.MutableRefObject<HTMLDivElement | null>;
};

export interface NavbarItemModel extends DefaultNavbarModel {
	title: string;
	section: string;
	classProps?: string;
}

export interface LoginIconModel extends DefaultNavbarModel {
	liStyles?: string;
}
