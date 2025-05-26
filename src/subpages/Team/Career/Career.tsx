import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CareerOfferArray } from './components';

const Career: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Kariera | Learnica</title>
				<meta
					name='description'
					content='Dołącz do zespołu Learnica – szukamy pasjonatów edukacji, którzy chcą rozwijać się razem z nami.'
				/>
				<meta property='og:title' content='Kariera | Learnica' />
				<meta
					property='og:description'
					content='Sprawdź aktualne oferty pracy i dowiedz się, dlaczego warto pracować z Learnicą.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/kariera' />
				<link rel='canonical' href='https://learnica.pl/kariera' />
			</Helmet>
			<main className='career'>
				<div className='career__container'>
					<div className='career__wrapper'>
						<div className='career__hero-image'>
							<h1 className='career__hero-image-title'>Kariera</h1>
						</div>
						<CareerOfferArray />
					</div>
					<Link className='career__return-btn' to='/'>
						Powrót
					</Link>
				</div>
			</main>
		</>
	);
};

export default Career;
