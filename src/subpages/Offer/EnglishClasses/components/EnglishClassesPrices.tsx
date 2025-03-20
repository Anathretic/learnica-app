import { memo } from 'react';
import { FaTabletAlt } from 'react-icons/fa';

const EnglishClassesPrices: React.FC = () => {
	return (
		<section className='english-classes__banner'>
			<h2 className='english-classes__title english-classes__title--special'>Cennik</h2>
			<div className='english-classes__banner-container'>
				<div className='english-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='english-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='english-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
				<div className='english-classes__banner-container-box'>
					<FaTabletAlt fontSize={56} color='#edf0f5' />
					<h3>Lorem ipsum dolor sit amet.</h3>
				</div>
			</div>
			<div className='english-classes__banner-special-block english-classes__banner-special-block--left' />
			<div className='english-classes__banner-special-block english-classes__banner-special-block--right' />
		</section>
	);
};

export default memo(EnglishClassesPrices);
