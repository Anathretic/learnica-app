import { memo } from 'react';

const PolishClassesPrices: React.FC = () => {
	return (
		<section className='polish-classes__banner'>
			<h2 className='polish-classes__title polish-classes__title--special'>Cennik</h2>
			<div className='polish-classes__banner-wrapper'>
				<div className='polish-classes__banner-container'>
					<div className='polish-classes__banner-container-box'>
						<h3>Regulaminowa lekcja trwająca 50 minut*</h3>
						<p>60 zł</p>
						<h3>Pomoc z pracą pisemną - last minute**</h3>
						<p>50+ zł</p>
						<h3>Pomoc z zadaniem gramatycznym - last minute**</h3>
						<p>20+ zł</p>
						<h3>Przygotowanie do sprawdzianu lub egzaminu - last minute**</h3>
						<p>80+ zł</p>
					</div>
				</div>
				<div className='polish-classes__special-banner-container'>
					<p>
						*Każda pierwsza lekcja jest traktowana jako lekcja próbna i kosztuje połowę ceny - <span>30 zł</span>.
					</p>
					<p>**Pomoc last minute oznacza pomoc do 24h od planowanego sprawdzianu lub terminu oddania pracy domowej.</p>
					<p>
						Płatność może być wykonana osobiście w trakcie lekcji lub za pomocą przelewu na konto, którego numer
						wysyłamy w wiadomości zwrotnej po zapisaniu się na lekcję.
					</p>
				</div>
			</div>
			<div className='polish-classes__banner-special-block polish-classes__banner-special-block--left' />
			<div className='polish-classes__banner-special-block polish-classes__banner-special-block--right' />
		</section>
	);
};

export default memo(PolishClassesPrices);
