import { memo } from 'react';
import { TbPackages } from 'react-icons/tb';

const TranslationsBenefits: React.FC = () => {
	return (
		<section className='translations__benefits'>
			<h2 className='translations__title'>Dlaczego my?</h2>
			<div className='translations__benefits-text-content'>
				<div className='translations__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='translations__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='translations__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
				<div className='translations__benefits-text-content-box'>
					<TbPackages fontSize={56} color='#24485c' />
					<h3>Lorem, ipsum dolor.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae nobis aliquam odit quisquam.
						<span> Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
					</p>
				</div>
			</div>
			<div className='translations__benefits-special-block translations__benefits-special-block--left' />
			<div className='translations__benefits-special-block translations__benefits-special-block--right' />
		</section>
	);
};

export default memo(TranslationsBenefits);
