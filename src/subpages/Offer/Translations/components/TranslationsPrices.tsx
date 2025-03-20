import { memo } from 'react';
import { FaTabletAlt } from 'react-icons/fa';

const TranslationsPrices: React.FC = () => {
	return (
		<section className='translations__banner'>
			<h2 className='translations__title translations__title--special'>Cennik</h2>
			<div className='translations__banner-container'>
				<div className='translations__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='translations__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='translations__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='translations__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
			</div>
			<div className='translations__banner-special-block translations__banner-special-block--left' />
			<div className='translations__banner-special-block translations__banner-special-block--right' />
		</section>
	);
};

export default memo(TranslationsPrices);
