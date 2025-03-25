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
							Naszym celem jest zapewnienie rzetelnego i precyzyjnego przekładu, który zachowuje pełny sens oryginalnego
							tekstu. Dbamy o to, aby w procesie tłumaczenia nie zniekształcić intencji autora, jednocześnie
							dostosowując tekst do wymogów języka docelowego.
						</li>
						<li>
							Tłumaczymy nie tylko dosłownie, ale staramy się również oddać subtelności, które mogą wpłynąć na
							ostateczny odbiór tekstu. Każdy przekład jest dokładnie sprawdzany, aby upewnić się, że nie zawiera błędów
							i jest wierny oryginałowi. Dzięki temu nasi klienci mogą mieć pewność, że tłumaczenie jest zarówno
							poprawne, jak i wierne pierwotnej treści.
						</li>
					</ul>
				</div>
				<div className='translations__benefits-text-content-box'>
					<FaShuffle fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Elastyczność</h3>
					<ul>
						<li>
							Oferta obejmuje szeroki zakres usług tłumaczeniowych, co pozwala na dostosowanie się do różnych potrzeb
							naszych klientów. Tłumaczymy nie tylko teksty literackie, ale również materiały marketingowe, artykuły
							naukowe czy teksty wymagające specjalistycznej wiedzy. Dodatkowo, oferujemy usługi edycji i korekty
							tekstów, co pozwala na poprawienie zarówno tłumaczenia, jak i stylu pisania, by materiał był jak
							najbardziej profesjonalny.
						</li>
						<li>
							Bez względu na to, czy tłumaczymy proste dokumenty, czy skomplikowane materiały branżowe, staramy się
							zawsze dopasować naszą ofertę do indywidualnych potrzeb klienta. Dzięki temu nasze usługi są kompleksowe i
							mogą zaspokoić najróżniejsze wymagania.
						</li>
					</ul>
				</div>
				<div className='translations__benefits-text-content-box'>
					<FaCalendarCheck fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Terminowość</h3>
					<ul>
						<li>
							Zdajemy sobie sprawę, jak ważny jest czas w procesie tłumaczenia. Oferujemy szybkie, ale jednocześnie
							precyzyjne usługi, co sprawia, że nasi klienci mogą liczyć na terminowe dostarczenie materiałów. Każdy
							projekt traktujemy priorytetowo, dostosowując nasze działania do wymagań klienta i harmonogramu.
						</li>
						<li>
							Dzięki zaawansowanemu zarządzaniu czasem, jesteśmy w stanie dostarczyć wysokiej jakości tłumaczenia w
							ustalonym terminie, bez opóźnień. Dbałość o dotrzymywanie terminów jest jednym z kluczowych elementów,
							które wyróżniają naszą firmę na tle konkurencji, ponieważ rozumiemy, jak istotna jest punktualność w pracy
							z klientami.
						</li>
					</ul>
				</div>
				<div className='translations__benefits-text-content-box'>
					<FaStar fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Jakość</h3>
					<ul>
						<li>
							Do każdego zlecenia podchodzimy z najwyższą starannością. W trakcie pracy nad każdym projektem dokładamy
							wszelkich starań, aby tłumaczenie było nie tylko poprawne, ale również płynne i naturalne w języku
							docelowym. Nasi tłumacze posiadają wiedzę i umiejętności niezbędne do wykonania nawet najbardziej
							wymagających przekładów.
						</li>
						<li>
							Stosujemy także systemy weryfikacji jakości, które pomagają wychwycić ewentualne błędy i niedociągnięcia,
							zanim finalny tekst trafi do klienta. Dzięki temu zapewniamy, że nasze tłumaczenia są nie tylko poprawne,
							ale także dostosowane do oczekiwań naszych klientów, spełniając najwyższe standardy jakości.
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
