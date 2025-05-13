import { memo } from 'react';

const TranslationsPrices: React.FC = () => {
	return (
		<section className='translations__prices'>
			<h2 className='translations__title translations__title--special'>Cennik</h2>
			<div className='translations__prices-container'>
				<div className='translations__prices-container-box'>
					<h3>Z języka angielskiego na język polski</h3>
					<p>45 zł</p>
				</div>
				<div className='translations__prices-container-box'>
					<h3>Z języka polskiego na język angielski</h3>
					<p>50 zł</p>
				</div>
				<div className='translations__prices-container-box'>
					<h3>Korekta tekstu</h3>
					<p>40 zł</p>
				</div>
				<div className='translations__prices-container-box'>
					<h3>Dokumenty specjalistyczne</h3>
					<p>+20% normalnej stawki</p>
				</div>
				<p className='translations__special-paragraph'>-- Krótki opis --</p>
				<div className='translations__prices-container-box translations__prices-container-box--info-box'>
					<p>
						Tłumaczenie zwykłe - strona a4 tj. 1500 znaków ze spacjami. Liczone są znaki widoczne i odstępy między
						wyrazami.
					</p>
				</div>
				<div className='translations__prices-container-box translations__prices-container-box--info-box'>
					<p>Rozpoczęta strona liczona jest jako pełna.</p>
				</div>
				<div className='translations__prices-container-box translations__prices-container-box--info-box'>
					<p>Przy większych projektach istnieje możliwość negocjacji.</p>
				</div>
				<div className='translations__prices-container-box translations__prices-container-box--info-box'>
					<p>
						Płatność może być wykonana osobiście w trakcie przekazania dokumentów lub za pomocą przelewu na konto,
						którego numer wysyłamy w wiadomości zwrotnej po wstępnej wycenie.
					</p>
				</div>
			</div>
			<div className='translations__prices-special-block translations__prices-special-block--left' />
			<div className='translations__prices-special-block translations__prices-special-block--right' />
		</section>
	);
};

export default memo(TranslationsPrices);
