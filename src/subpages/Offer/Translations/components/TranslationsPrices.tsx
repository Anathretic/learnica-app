import { memo } from 'react';

const TranslationsPrices: React.FC = () => {
	return (
		<section className='translations__banner'>
			<h2 className='translations__title translations__title--special'>Cennik</h2>
			<div className='translations__banner-wrapper'>
				<div className='translations__banner-container'>
					<div className='translations__banner-container-box'>
						<h3>Z języka angielskiego na język polski*</h3>
						<p>45 zł</p>
						<h3>Z języka polskiego na język angielski*</h3>
						<p>50 zł</p>
						<h3>Korekta tekstu</h3>
						<p>40 zł</p>
						<h3>Dokumenty specjalistyczne</h3>
						<p>+20% normalnej stawki</p>
					</div>
				</div>
				<div className='translations__special-banner-container'>
					<p>
						*Tłumaczenie zwykłe - <span>strona a4 tj. 1500 znaków ze spacjami.</span> Liczone są znaki widoczne i
						odstępy między wyrazami.
					</p>
					<p>
						Rozpoczęta strona liczona jest jako <span>pełna.</span>
					</p>
					<p>
						Przy krótszym czasie oczekiwania cena wzrasta, zaś przy większych projektach{' '}
						<span>istnieje możliwość negocjacji.</span>{' '}
					</p>
					<p>
						Płatność może być wykonana osobiście w trakcie przekazania dokumentów lub za pomocą przelewu na konto,
						którego numer wysyłamy w wiadomości zwrotnej po wstępnej wycenie.
					</p>
				</div>
			</div>
			<div className='translations__banner-special-block translations__banner-special-block--left' />
			<div className='translations__banner-special-block translations__banner-special-block--right' />
		</section>
	);
};

export default memo(TranslationsPrices);
