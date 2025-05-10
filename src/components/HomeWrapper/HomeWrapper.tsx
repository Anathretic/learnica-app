import { Helmet } from 'react-helmet-async';
import { HomeWrapperModel } from '../../models/homeWrapper.model';

const HomeWrapper: React.FC<HomeWrapperModel> = ({ children }) => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Korepetycje Polski - Angielski - Matematyka | Learnica</title>
				<meta
					name='description'
					content='Indywidualne korepetycje z języka polskiego, angielskiego i matematyki dla uczniów oraz firm. Nauka u ucznia lub lektora. Skuteczna edukacja tylko z Learnica.'
				/>
				<meta property='og:title' content='Korepetycje Polski - Angielski - Matematyka | Learnica' />
				<meta
					property='og:description'
					content='Zajęcia z polskiego, angielskiego i matematyki – profesjonalnie i skutecznie. Sprawdź nas.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/' />
				<link rel='canonical' href='https://learnica.pl/' />
			</Helmet>
			<main>{children}</main>
		</>
	);
};

export default HomeWrapper;
