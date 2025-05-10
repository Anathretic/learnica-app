import { Helmet } from 'react-helmet-async';
import { TranslationsBenefits, TranslationsForm, TranslationsPrices } from './components';

const Translations: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Tłumaczenia | Learnica</title>
				<meta
					name='description'
					content='Profesjonalne tłumaczenia z języka angielskiego na polski i odwrotnie. Obsługa firm oraz osób prywatnych.'
				/>
				<meta property='og:title' content='Tłumaczenia | Learnica' />
				<meta property='og:description' content='Szybkie i rzetelne tłumaczenia tekstów i dokumentów.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/tlumaczenia' />
				<link rel='canonical' href='https://learnica.pl/tlumaczenia' />
			</Helmet>
			<main className='translations'>
				<div className='translations__container'>
					<div className='translations__wrapper'>
						<div className='translations__hero-image'>
							<h1 className='translations__hero-image-title'>Tłumaczenia</h1>
						</div>
						<TranslationsBenefits />
						<TranslationsPrices />
						<TranslationsForm />
					</div>
				</div>
			</main>
		</>
	);
};

export default Translations;
