import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../utils/scrollToTopUtils';
import { OfferBoxModel } from '../../../models/offer.model';

export const OfferBox: React.FC<OfferBoxModel> = ({ subpage, text, title, price, offerItemsCollection }) => {
	return (
		<div className='offer__box dark-blue-gradient'>
			<h3 className='offer__box-title'>{title}</h3>
			<p className='offer__box-text'>{text}</p>
			<p className='offer__box-special-text'>Dlaczego my?</p>
			<ul>
				{offerItemsCollection.edges.map((data, id) => (
					<li key={id}>{data.node.content}</li>
				))}
			</ul>
			<p className='offer__box-special-text'>Cena już od:</p>
			<p className='offer__price'>{price}zł</p>
			<Link
				to={`/${subpage}`}
				className='offer__box-button'
				onClick={() => {
					scrollToTop();
				}}>
				Sprawdź
			</Link>
		</div>
	);
};
