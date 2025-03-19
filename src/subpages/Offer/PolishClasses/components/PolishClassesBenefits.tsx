import { memo } from 'react';
import { TbPackages } from 'react-icons/tb';

const PolishClassesBenefits: React.FC = () => {
	return (
		<section className='polish-classes__benefits'>
			<h2 className='polish-classes__title'>Dlaczego my?</h2>
			<div className='polish-classes__benefits-text-content'>
				<div className='polish-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='polish-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='polish-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='polish-classes__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
			</div>
			<div className='polish-classes__benefits-special-block polish-classes__benefits-special-block--left' />
			<div className='polish-classes__benefits-special-block polish-classes__benefits-special-block--right' />
		</section>
	);
};

export default memo(PolishClassesBenefits);
