import { memo } from 'react';
import { FaTabletAlt } from 'react-icons/fa';

const PolishClassesPrices: React.FC = () => {
	return (
		<section className='polish-classes__banner'>
			<h2 className='polish-classes__title polish-classes__title--special'>Cennik</h2>
			<div className='polish-classes__banner-container'>
				<div className='polish-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='polish-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='polish-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='polish-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
			</div>
			<div className='polish-classes__banner-special-block polish-classes__banner-special-block--left' />
			<div className='polish-classes__banner-special-block polish-classes__banner-special-block--right' />
		</section>
	);
};

export default memo(PolishClassesPrices);
