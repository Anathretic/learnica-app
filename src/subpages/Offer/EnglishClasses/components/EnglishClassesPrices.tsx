import { memo } from 'react';

const EnglishClassesPrices: React.FC = () => {
	return (
		<section className='english-classes__prices'>
			<h2 className='english-classes__title english-classes__title--special'>Cennik</h2>
			<div className='english-classes__prices-container'>
				<div className='english-classes__prices-container-box'>
					<h3>Regulaminowa lekcja trwająca 50 minut</h3>
					<p>60 zł</p>
				</div>
				<p className='english-classes__special-paragraph'>-- Last minute --</p>
				<div className='english-classes__prices-container-box'>
					<h3>Pomoc z pracą pisemną</h3>
					<p>40+ zł</p>
				</div>
				<div className='english-classes__prices-container-box'>
					<h3>Pomoc z zadaniem gramatycznym</h3>
					<p>30+ zł</p>
				</div>
				<div className='english-classes__prices-container-box'>
					<h3>Przygotowanie do sprawdzianu lub egzaminu</h3>
					<p>80+ zł</p>
				</div>
				<p className='english-classes__special-paragraph'>-- Krótki opis --</p>
				<div className='english-classes__prices-container-box english-classes__prices-container-box--info-box'>
					<p>Każda pierwsza lekcja jest traktowana jako lekcja próbna i kosztuje połowę ceny - 30 zł.</p>
				</div>
				<div className='english-classes__prices-container-box english-classes__prices-container-box--info-box'>
					<p>Pomoc last minute oznacza pomoc do 24h od planowanego sprawdzianu lub terminu oddania pracy domowej.</p>
				</div>
				<div className='english-classes__prices-container-box english-classes__prices-container-box--info-box'>
					<p>
						Płatność może być wykonana osobiście w trakcie lekcji lub za pomocą przelewu na konto, którego numer
						wysyłamy w wiadomości zwrotnej po zapisaniu się na lekcję.
					</p>
				</div>
			</div>
			<div className='english-classes__prices-special-block english-classes__prices-special-block--left' />
			<div className='english-classes__prices-special-block english-classes__prices-special-block--right' />
		</section>
	);
};

export default memo(EnglishClassesPrices);
