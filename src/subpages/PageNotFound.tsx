import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import NotFoundImage from '../images/notfound-subpage/notfound-image.png';

const PageNotFound: React.FC = () => {
	const currentUrl = window.location.href;

	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Strona Nie Znaleziona | Learnica</title>
				<meta name='description' content='Przepraszamy, ta strona nie istnieje. Wróć na stronę główną Learnica.' />
				<meta property='og:title' content='Strona Nie Znaleziona | Learnica' />
				<meta
					property='og:description'
					content='Podana strona nie została znaleziona. Wróć na stronę główną Learnica.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content={currentUrl} />
				<meta name='robots' content='noindex, nofollow' />
			</Helmet>
			<main>
				<section className='notfound'>
					<div className='notfound__container'>
						<img className='notfound__img' src={NotFoundImage} alt='Obrazek informujący o braku strony' />
						<div className='notfound__box'>
							<h1 className='notfound__title'>Ups! Strony nie znaleziono..</h1>
							<p className='notfound__credits'>
								Chyba link się nie zgadza.. Skorzystaj z przycisku poniżej i zacznij swoje poszukiwanie od głównej
								strony!
							</p>
							<Link to='/' className='notfound__btn' aria-label='Powrót na stronę główną'>
								Powrót
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default PageNotFound;
