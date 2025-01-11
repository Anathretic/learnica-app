import { FooterItemsModel } from '../../../models/footerItems.model';
import { scrollToTop } from '../../../utils/scrollToTopUtils';

export const footerOfferItems: FooterItemsModel[] = [
	{ to: '/jezyk-polski', onClick: scrollToTop, content: 'Język polski' },
	{ to: '/jezyk-angielski', onClick: scrollToTop, content: 'Język angielski' },
	{ to: '/matematyka', onClick: scrollToTop, content: 'Matematyka' },
	{ to: '/tlumaczenia', onClick: scrollToTop, content: 'Tłumaczenia' },
];

export const footerTeamItems: FooterItemsModel[] = [
	{ to: '/o-nas', onClick: scrollToTop, content: 'O nas' },
	{ to: '/program-nauczania', onClick: scrollToTop, content: 'Program nauczania' },
	{ to: '/lektorzy', onClick: scrollToTop, content: 'Lektorzy' },
];

export const footerMoreItems: FooterItemsModel[] = [
	{ to: '/logowanie', onClick: scrollToTop, content: 'Logowanie' },
	{ to: '/rejestracja', onClick: scrollToTop, content: 'Rejestracja' },
	{ to: '/polityka-prywatnosci', onClick: scrollToTop, content: 'Polityka prywatności' },
];
