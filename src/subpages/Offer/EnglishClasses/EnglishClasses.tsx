import { Helmet } from 'react-helmet-async';
import { EnglishClassesBenefits, EnglishClassesForm, EnglishClassesPrices } from './components';

const EnglishClasses: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Korepetycje z Języka Angielskiego | Learnica</title>
				<meta
					name='description'
					content='Indywidualne lekcje angielskiego dla dzieci, młodzieży i dorosłych. Nauka języka angielskiego dla uczniów i firm.'
				/>
				<meta property='og:title' content='Korepetycje z Języka Angielskiego | Learnica' />
				<meta
					property='og:description'
					content='Lekcje języka angielskiego na każdym poziomie zaawansowania – zdalnie i stacjonarnie.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/jezyk-angielski' />
				<link rel='canonical' href='https://learnica.pl/jezyk-angielski' />
			</Helmet>
			<main className='english-classes'>
				<div className='english-classes__container'>
					<div className='english-classes__wrapper'>
						<div className='english-classes__hero-image'>
							<h1 className='english-classes__hero-image-title'>Lekcje angielskiego</h1>
						</div>
						<EnglishClassesBenefits />
						<EnglishClassesPrices />
						<EnglishClassesForm />
					</div>
				</div>
			</main>
		</>
	);
};

export default EnglishClasses;
