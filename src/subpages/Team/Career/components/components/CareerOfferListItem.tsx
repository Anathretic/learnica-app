import { useNavigate } from 'react-router-dom';
import { CareerOfferListItemModel } from '../../../../../models/career.model';

export const CareerOfferListItem: React.FC<CareerOfferListItemModel> = ({ href, title, description }) => {
	const navigate = useNavigate();

	const handleClick = (id: string) => {
		navigate(`/kariera/${id}`);
	};

	return (
		<li className='career__offer-array-list-item'>
			<h3>{title}</h3>
			<p>{description}</p>
			<button className='career__offer-array-list-item-btn' onClick={() => handleClick(href)} type='button'>
				Zobacz
			</button>
		</li>
	);
};
