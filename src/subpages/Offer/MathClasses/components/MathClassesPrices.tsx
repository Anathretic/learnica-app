import { memo } from 'react';

const MathClassesPrices: React.FC = () => {
	return (
		<section className='math-classes__banner'>
			<h2 className='math-classes__title math-classes__title--special'>Cennik</h2>
			<div className='math-classes__banner-container'>
				<div className='math-classes__banner-container-box'>
					<h3>Regulaminowa lekcja trwająca 45 minut*</h3>
					<p>60 zł</p>
				</div>
				<div className='math-classes__banner-container-box'>
					<h3>Pomoc z pracą domową - last minute**</h3>
					<p>30+ zł</p>
				</div>
				<div className='math-classes__banner-container-box'>
					<h3>Pomoc z zestawem zadań - last minute**</h3>
					<p>40+ zł</p>
				</div>
				<div className='math-classes__banner-container-box'>
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
					Płatność może być wykonana osobiście w trakcie lekcji lub za pomocą przelewu na konto, którego numer wysyłamy
					w wiadomości zwrotnej po zapisaniu się na lekcję.
				</p>
			</div>
			<div className='math-classes__banner-special-block math-classes__banner-special-block--left' />
			<div className='math-classes__banner-special-block math-classes__banner-special-block--right' />
		</section>
	);
};

export default memo(MathClassesPrices);
