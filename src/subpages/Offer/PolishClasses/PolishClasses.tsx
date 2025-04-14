import { PolishClassesBenefits, PolishClassesForm, PolishClassesPrices } from './components';

const PolishClasses: React.FC = () => {
	return (
		<main className='polish-classes'>
			<div className='polish-classes__container'>
				<div className='polish-classes__wrapper'>
					<div className='polish-classes__hero-image'>
						<h1 className='polish-classes__hero-image-title'>Lekcje polskiego</h1>
					</div>
					<PolishClassesBenefits />
					<PolishClassesPrices />
					<PolishClassesForm />
				</div>
			</div>
		</main>
	);
};

export default PolishClasses;
