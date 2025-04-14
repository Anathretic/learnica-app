import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';

import NotFoundImage from '../images/notfound-subpage/notfound-image.png';

const PageNotFound: React.FC = () => {
	return (
		<main>
			<section className='notfound'>
				<div className='notfound__container'>
					<img className='notfound__img' src={NotFoundImage} alt='Obrazek informujący o braku strony' />
					<div className='notfound__box'>
						<h1 className='notfound__title'>Ups! Strony nie znaleziono..</h1>
						<p className='notfound__credits'>
							Chyba link się nie zgadza.. Skorzystaj z przycisku poniżej i zacznij swoje poszukiwanie od głównej strony!
						</p>
						<Link to='/' className='notfound__btn' onClick={scrollToTop} aria-label='Powrót na stronę główną'>
							Powrót
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default PageNotFound;
