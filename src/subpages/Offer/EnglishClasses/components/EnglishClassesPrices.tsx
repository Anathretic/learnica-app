import { memo } from 'react';

const EnglishClassesPrices: React.FC = () => {
	return (
		<section className='english-classes__banner'>
			<h2 className='english-classes__title english-classes__title--special'>Cennik</h2>
			<div className='english-classes__banner-wrapper'>
				<div className='english-classes__banner-container'>
					<div className='english-classes__banner-container-box'>
						<h3>Regulaminowa lekcja trwająca 50 minut*</h3>
						<p>60 zł</p>
						<h3>Pomoc z pracą pisemną - last minute**</h3>
						<p>40+ zł</p>
						<h3>Pomoc z zadaniem gramatycznym - last minute**</h3>
						<p>30+ zł</p>
						<h3>Przygotowanie do sprawdzianu lub egzaminu - last minute**</h3>
						<p>80+ zł</p>
					</div>
				</div>
				<div className='english-classes__special-banner-container'>
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
			<div className='english-classes__banner-special-block english-classes__banner-special-block--left' />
			<div className='english-classes__banner-special-block english-classes__banner-special-block--right' />
		</section>
	);
};

export default memo(EnglishClassesPrices);
