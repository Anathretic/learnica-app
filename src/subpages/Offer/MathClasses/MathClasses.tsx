import { Helmet } from 'react-helmet-async';
import { MathClassesBenefits, MathClassesForm, MathClassesPrices } from './components';

const MathClasses: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Korepetycje z Matematyki | Learnica</title>
				<meta
					name='description'
					content='Pomoc z matematyki – od szkoły podstawowej po przygotowanie do matury. Profesjonalne korepetycje z Learnica.'
				/>
				<meta property='og:title' content='Korepetycje z Matematyki | Learnica' />
				<meta
					property='og:description'
					content='Zajęcia z matematyki dopasowane do poziomu ucznia. Nauka logicznego myślenia i rozwiązywania zadań.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/matematyka' />
				<link rel='canonical' href='https://learnica.pl/matematyka' />
			</Helmet>
			<main className='math-classes'>
				<div className='math-classes__container'>
					<div className='math-classes__wrapper'>
						<div className='math-classes__hero-image'>
							<h1 className='math-classes__hero-image-title'>Lekcje matematyki</h1>
						</div>
						<MathClassesBenefits />
						<MathClassesPrices />
						<MathClassesForm />
					</div>
				</div>
			</main>
		</>
	);
};

export default MathClasses;
