import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { opinionsGraph } from '../../graphql/graphs';
import { OpinionItem } from './components/OpinionItem';
import { OpinionsDataModel } from '../../models/opinions.model';

const Opinions: React.FC = () => {
	const [stopAnimation, setStopAnimation] = useState(false);

	const { data, loading, error } = useQuery(opinionsGraph);

	return (
		<section id='opinie' className='opinions'>
			<div className='opinions__container'>
				<h2 className='opinions__title'>Opinie</h2>
				<div className='opinions__title-decoration' />
				{!error ? (
					<div className='opinions__wrapper'>
						<div className={`opinions__carousel-container ${stopAnimation ? 'opinions__stop-animation' : ''}`}>
							{!loading &&
								data.opinionsCollection.edges.map((data: OpinionsDataModel, id: number) => (
									<OpinionItem
										key={id}
										title={data.node.title}
										opinion={data.node.opinion}
										name={data.node.name}
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
