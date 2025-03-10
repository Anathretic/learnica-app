import { OpinionDataModel } from '../../../models/opinions.model';

interface OpinionItemProps extends OpinionDataModel {
	setStopAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpinionItem: React.FC<OpinionItemProps> = ({ name, opinion, title, setStopAnimation }) => {
	return (
		<div
			className='opinions__box dark-blue-gradient'
			onMouseOver={() => {
				setStopAnimation(true);
			}}
			onMouseLeave={() => {
				setStopAnimation(false);
			}}>
			<h3>{title}</h3>
			<p>{opinion}</p>
			<span>{name}</span>
		</div>
	);
};
