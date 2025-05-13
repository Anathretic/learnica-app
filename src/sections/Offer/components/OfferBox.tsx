import { Link } from 'react-router-dom';
import { OfferBoxModel } from '../../../models/offer.model';
import { FaPencilAlt } from 'react-icons/fa';

export const OfferBox: React.FC<OfferBoxModel> = ({ id, subpage, text, title, price, offerItemsCollection }) => {
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
			{subpage === 'jezyk-angielski' && (
				<p className='offer__extra-text'>
					<span>Potrzebujesz tłumacza?</span> Dobrze trafiłeś! Kliknij drugi przycisk i zobacz naszą ofertę.
				</p>
			)}
			<p className='offer__box-special-text'>Cena już od:</p>
			<p className='offer__price'>{price}zł</p>
			<Link to={`/${subpage}`} className='offer__box-button'>
				Sprawdź
			</Link>
			{subpage === 'jezyk-angielski' && (
				<>
					<hr className='offer__special-decoration' />
					<Link to={`/tlumaczenia`} className='offer__box-button'>
						Tłumaczenia
					</Link>
				</>
			)}
			<FaPencilAlt className={`offer__special-box-icon offer__special-box-icon--${id}`} />
		</div>
	);
};
