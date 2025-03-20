import { memo } from 'react';
import { FaTabletAlt } from 'react-icons/fa';

const MathClassesPrices: React.FC = () => {
	return (
		<section className='math-classes__banner'>
			<h2 className='math-classes__title math-classes__title--special'>Cennik</h2>
			<div className='math-classes__banner-container'>
				<div className='math-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='math-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='math-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='math-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
			</div>
			<div className='math-classes__banner-special-block math-classes__banner-special-block--left' />
			<div className='math-classes__banner-special-block math-classes__banner-special-block--right' />
		</section>
	);
};

export default memo(MathClassesPrices);
