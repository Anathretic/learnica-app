import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet-async';
import { CareerOfferArray } from './components';
import { FaBook, FaPencilAlt, FaPenFancy } from 'react-icons/fa';

const Career: React.FC = () => {
	const isLarge = useMediaQuery({ query: '(min-width: 1358px)' });

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
						<div className='career__first-icon-box'>
							<FaBook className='career__first-box-icon career__first-box-icon--first' fontSize={isLarge ? 70 : 62} />
							<FaPencilAlt
								className='career__first-box-icon career__first-box-icon--second'
								fontSize={isLarge ? 66 : 60}
							/>
						</div>
						<div className='career__hero-image'>
							<h1 className='career__hero-image-title'>Kariera</h1>
						</div>
						<CareerOfferArray />
						<div className='career__second-icon-box'>
							<FaPencilAlt
								className='career__second-box-icon career__second-box-icon--first'
								fontSize={isLarge ? 74 : 66}
							/>
							<FaPenFancy className='career__second-box-icon career__second-box-icon--second' fontSize={54} />
						</div>
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
