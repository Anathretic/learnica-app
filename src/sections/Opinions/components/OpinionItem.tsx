import { OpinionsDataBoxPropsModel } from '../../../models/opinions.model';
import { FaQuoteRight } from 'react-icons/fa6';

export const OpinionItem: React.FC<OpinionsDataBoxPropsModel> = ({ name, opinion, title, setStopAnimation }) => {
	return (
		<div
			className='opinions__box dark-blue-gradient'
			onMouseOver={() => {
				setStopAnimation(true);
			}}
			onMouseLeave={() => {
				setStopAnimation(false);
			}}>
			<FaQuoteRight className='opinions__box-icon' />
			<h3>{title}</h3>
			<p>{opinion}</p>
			<span>{name}</span>
		</div>
	);
};
