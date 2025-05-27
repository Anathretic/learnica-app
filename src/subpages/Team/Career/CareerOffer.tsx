import { Link, useParams } from 'react-router-dom';
import { jobOffersData } from '../../../data/jobOfferData';

const CareerOffer: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const offer = jobOffersData.find(offer => offer.href === id);

	return (
		<main>
			<section className='career-offer'>
				<div className='career-offer__container'>
					{!offer ? (
						<>
							<p className='career-offer__error-message'>
								Ta oferta nie istnieje.. Wróc i poszukaj innej. Może tylko błędnie wprowadziłeś adres strony? :)
							</p>
							<Link to='/kariera' className='career-offer__btn'>
								Powrót
							</Link>
						</>
					) : (
						<>
							<h1 className='career-offer__title'>{offer.title}</h1>
							<p className='career-offer__date'>Data dodania: {offer.date}</p>
							<div className='career-offer__box'>
								<h2>{offer.firstSubtitle}</h2>
								<p>{offer.firstParagraph}</p>
							</div>
							<div className='career-offer__box'>
								<h2>{offer.secondSubtitle}</h2>
								<p>{offer.secondParagraph}</p>
							</div>
							<div className='career-offer__box'>
								<h2>{offer.thirdSubtitle}</h2>
								<p>{offer.thirdParagraph}</p>
							</div>
							<Link to='/' className='career-offer__btn'>
								Aplikuj
							</Link>
							<Link to='/kariera' className='career-offer__btn'>
								Powrót
							</Link>
						</>
					)}
				</div>
			</section>
		</main>
	);
};

export default CareerOffer;
