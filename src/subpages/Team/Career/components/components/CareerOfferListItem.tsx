import { Link } from 'react-router-dom';
import { CareerOfferListItemModel } from '../../../../../models/career.model';

export const CareerOfferListItem: React.FC<CareerOfferListItemModel> = ({ title, description }) => {
	return (
		<li className='career__offer-array-list-item'>
			<h3>{title}</h3>
			<p>{description}</p>
			<Link className='career__offer-array-list-item-btn' to='/'>
				Zobacz
			</Link>
		</li>
	);
};
