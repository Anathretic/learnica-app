import { useEffect, useState } from 'react';
import { OpinionItem } from './components/OpinionItem';
import { getOpinionData } from '../../helpers/getDataHelpers';
import { OpinionDataModel } from '../../models/opinions.model';

const Opinions: React.FC = () => {
	const [opinions, setOpinions] = useState<OpinionDataModel[]>([]);
	const [error, setError] = useState(false);
	const [stopAnimation, setStopAnimation] = useState(false);

	useEffect(() => {
		getOpinionData({ setOpinions, setError });
	}, []);

	return (
		<section id='opinie' className='opinions'>
			<div className='opinions__container'>
				<h2 className='opinions__title'>Opinie</h2>
				<div className='opinions__title-decoration' />
				{!error ? (
					<div className='opinions__wrapper'>
						<div className={`opinions__carousel-container ${stopAnimation ? 'opinions__stop-animation' : ''}`}>
							{opinions.map((data: OpinionDataModel, id: number) => (
								<OpinionItem
									key={id}
									title={data.title}
									opinion={data.opinion}
									name={data.name}
									setStopAnimation={setStopAnimation}
								/>
							))}
						</div>
					</div>
				) : (
					<p className='opinions__error'>Ups! Wygląda na to, że serwer ma przerwę..</p>
				)}
			</div>
			<div className='opinions__special-block opinions__special-block--left' />
			<div className='opinions__special-block opinions__special-block--right' />
		</section>
	);
};

export default Opinions;
