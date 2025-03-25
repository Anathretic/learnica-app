import { EnglishClassesBenefits, EnglishClassesForm, EnglishClassesPrices } from './components';

const EnglishClasses: React.FC = () => {
	return (
		<div className='english-classes'>
			<div className='english-classes__container'>
				<div className='english-classes__wrapper'>
					<div className='english-classes__hero-image'>
						<h1 className='english-classes__hero-image-title'>Lekcje angielskiego</h1>
					</div>
					<EnglishClassesBenefits />
					<EnglishClassesPrices />
					<EnglishClassesForm />
				</div>
			</div>
		</div>
	);
};

export default EnglishClasses;
