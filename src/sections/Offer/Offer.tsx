import { useQuery } from '@apollo/client';
import { OfferBox } from './offerComponents/OfferBox';
import { OfferDataModel } from '../../models/offer.model';
import { offerGraph } from '../../graphql/graphs';

const Offer: React.FC = () => {
	const { loading, error, data } = useQuery(offerGraph);

	return (
		<section id='oferta' className='offer'>
			<div className='offer__container'>
				<h2 className='offer__title'>Oferta</h2>
				<div className='offer__title-decoration' />
				{!error ? (
					!loading && (
						<div className='offer__wrapper'>
							{data.offerCollection.edges.map((data: OfferDataModel, id: number) => (
								<OfferBox
									key={id}
									subpage={data.node.subpage}
									text={data.node.text}
									title={data.node.title}
									price={data.node.price}
									offerItemsCollection={data.node.offerItemsCollection}
								/>
							))}
						</div>
					)
				) : (
					<p className='offer__error'>Ups! Wygląda na to, że serwer ma przerwę..</p>
				)}
			</div>
			<div className='offer__special-block offer__special-block--left' />
			<div className='offer__special-block offer__special-block--right' />
		</section>
	);
};

export default Offer;
