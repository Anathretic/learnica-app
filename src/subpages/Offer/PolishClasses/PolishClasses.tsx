import { Helmet } from 'react-helmet-async';
import { PolishClassesBenefits, PolishClassesForm, PolishClassesPrices } from './components';

const PolishClasses: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Korepetycje z Języka Polskiego | Learnica</title>
				<meta
					name='description'
					content='Skuteczne korepetycje z języka polskiego – przygotowanie do egzaminów, pomoc w nauce i pisaniu. Ucz się z Learnica.'
				/>
				<meta property='og:title' content='Korepetycje z Języka Polskiego | Learnica' />
				<meta property='og:description' content='Skuteczne korepetycje z języka polskiego dla uczniów i firm.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/jezyk-polski' />
				<link rel='canonical' href='https://learnica.pl/jezyk-polski' />
			</Helmet>
			<main className='polish-classes'>
				<div className='polish-classes__container'>
					<div className='polish-classes__wrapper'>
						<div className='polish-classes__hero-image'>
							<h1 className='polish-classes__hero-image-title'>Lekcje polskiego</h1>
						</div>
						<PolishClassesBenefits />
						<PolishClassesPrices />
						<PolishClassesForm />
					</div>
				</div>
			</main>
		</>
	);
};

export default PolishClasses;
