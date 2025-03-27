import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaMagnifyingGlass, FaCalendarCheck, FaShuffle, FaStar } from 'react-icons/fa6';

const TranslationsBenefits: React.FC = () => {
	const isLarge = useMediaQuery({ query: '(min-width: 1358px)' });

	return (
		<section className='translations__benefits'>
			<h2 className='translations__title'>Dlaczego my?</h2>
			<div className='translations__benefits-text-content'>
				<div className='translations__benefits-text-content-box'>
					<FaMagnifyingGlass fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Dokładność</h3>
					<ul>
						<li>
							Naszym celem jest zapewnienie <span>rzetelnego i precyzyjnego przekładu</span>, który zachowuje pełny sens
							oryginalnego tekstu. <span>Dbamy o to, aby w procesie tłumaczenia nie zniekształcić intencji autora</span>
							, jednocześnie dostosowując tekst do wymogów języka docelowego.
						</li>
						<li>
							Tłumaczymy nie tylko dosłownie, ale <span>staramy się również oddać subtelności</span>, które mogą wpłynąć
							na ostateczny odbiór tekstu. Każdy przekład jest <span>dokładnie sprawdzany</span>, aby upewnić się, że
							nie zawiera błędów i jest wierny oryginałowi. Dzięki temu nasi klienci mogą mieć pewność, że tłumaczenie
							jest zarówno poprawne, jak i <span>wierne pierwotnej treści.</span>
						</li>
					</ul>
				</div>
				<div className='translations__benefits-text-content-box'>
					<FaShuffle fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Elastyczność</h3>
					<ul>
						<li>
							Oferta obejmuje szeroki zakres usług tłumaczeniowych, co pozwala na{' '}
							<span>dostosowanie się do różnych potrzeb naszych klientów.</span> Tłumaczymy nie tylko teksty literackie,
							ale również materiały marketingowe, artykuły naukowe czy teksty wymagające specjalistycznej wiedzy.
							Dodatkowo, <span>oferujemy usługi edycji i korekty tekstów</span>, co pozwala na poprawienie zarówno
							tłumaczenia, jak i stylu pisania, by materiał był jak najbardziej profesjonalny.
						</li>
						<li>
							Bez względu na to, czy tłumaczymy proste dokumenty, czy skomplikowane materiały branżowe, staramy się
							zawsze dopasować naszą ofertę do indywidualnych potrzeb klienta. Dzięki temu{' '}
							<span>nasze usługi są kompleksowe i mogą zaspokoić najróżniejsze wymagania.</span>
						</li>
					</ul>
				</div>
				<div className='translations__benefits-text-content-box'>
					<FaCalendarCheck fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Terminowość</h3>
					<ul>
						<li>
							Zdajemy sobie sprawę, jak ważny jest czas w procesie tłumaczenia.{' '}
							<span>Oferujemy szybkie, ale jednocześnie precyzyjne usługi</span>, co sprawia, że nasi klienci mogą
							liczyć na terminowe dostarczenie materiałów. <span>Każdy projekt traktujemy priorytetowo</span>,
							dostosowując nasze działania do wymagań klienta i harmonogramu.
						</li>
						<li>
							Dzięki zaawansowanemu zarządzaniu czasem, jesteśmy w stanie dostarczyć{' '}
							<span>wysokiej jakości tłumaczenia</span> w ustalonym terminie, bez opóźnień. Dbałość o dotrzymywanie
							terminów jest jednym z <span>kluczowych elementów</span>, które wyróżniają naszą firmę na tle konkurencji,
							ponieważ <span>rozumiemy, jak istotna jest punktualność w pracy z klientami</span>.
						</li>
					</ul>
				</div>
				<div className='translations__benefits-text-content-box'>
					<FaStar fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Jakość</h3>
					<ul>
						<li>
							Do każdego zlecenia podchodzimy z <span>najwyższą starannością</span>. W trakcie pracy nad projektem
							dokładamy wszelkich starań, aby tłumaczenie było nie tylko poprawne, ale również{' '}
							<span>płynne i naturalne w języku docelowym.</span> Nasi tłumacze posiadają wiedzę i umiejętności
							<span>niezbędne do wykonania nawet najbardziej wymagających przekładów.</span>
						</li>
						<li>
							Stosujemy także systemy weryfikacji jakości, które pomagają wychwycić ewentualne błędy i niedociągnięcia,
							zanim finalny tekst trafi do klienta. Dzięki temu <span>zapewniamy</span>, że nasze tłumaczenia są nie
							tylko poprawne, ale także dostosowane do oczekiwań naszych klientów,{' '}
							<span>spełniając najwyższe standardy jakości.</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='translations__benefits-special-block translations__benefits-special-block--left' />
			<div className='translations__benefits-special-block translations__benefits-special-block--right' />
		</section>
	);
};

export default memo(TranslationsBenefits);
