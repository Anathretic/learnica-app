import { MathClassesBenefits, MathClassesForm, MathClassesPrices } from './components';

const MathClasses: React.FC = () => {
	return (
		<div className='math-classes'>
			<div className='math-classes__container'>
				<div className='math-classes__wrapper'>
					<div className='math-classes__hero-image'>
						<h1 className='math-classes__hero-image-title'>Lekcje matematyki</h1>
					</div>
					<MathClassesBenefits />
					<MathClassesPrices />
					<MathClassesForm />
				</div>
			</div>
		</div>
	);
};

export default MathClasses;
