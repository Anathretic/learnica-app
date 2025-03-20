import { memo } from 'react';
import { TbPackages } from 'react-icons/tb';

const MathClassesBenefits: React.FC = () => {
	return (
		<section className='math-classes__benefits'>
			<h2 className='math-classes__title'>Dlaczego my?</h2>
			<div className='math-classes__benefits-text-content'>
				<div className='math-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='math-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='math-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='math-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
			</div>
			<div className='math-classes__benefits-special-block math-classes__benefits-special-block--left' />
			<div className='math-classes__benefits-special-block math-classes__benefits-special-block--right' />
		</section>
	);
};

export default memo(MathClassesBenefits);
