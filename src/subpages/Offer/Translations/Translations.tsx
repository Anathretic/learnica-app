import { TranslationsBenefits, TranslationsForm, TranslationsPrices } from './components';

const Translations: React.FC = () => {
	return (
		<div className='translations'>
			<div className='translations__container'>
				<div className='translations__wrapper'>
					<div className='translations__hero-image'>
						<h1 className='translations__hero-image-title'>Tłumaczenia</h1>
					</div>
					<TranslationsBenefits />
					<TranslationsPrices />
					<TranslationsForm />
				</div>
			</div>
		</div>
	);
};

export default Translations;
