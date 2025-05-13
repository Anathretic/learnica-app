import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaHelmetSafety } from 'react-icons/fa6';
import { MdComputer, MdEmojiPeople, MdFamilyRestroom } from 'react-icons/md';

const EnglishClassesBenefits: React.FC = () => {
	const isLarge = useMediaQuery({ query: '(min-width: 1358px)' });

	return (
		<section className='english-classes__benefits'>
			<h2 className='english-classes__title'>Dlaczego my?</h2>
			<div className='english-classes__benefits-text-content'>
				<div className='english-classes__benefits-text-content-box'>
					<MdFamilyRestroom fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Różne grupy wiekowe</h3>
					<ul>
						<li>
							<span>dzieci</span> - nauka przez zabawę, gry językowe i czytanie bajek. Rozwijanie słownictwa,
							podstawowych struktur gramatycznych oraz umiejętności komunikacyjnych, a także przygotowanie do zajęć i
							sprawdzianów w szkole,
						</li>
						<li>
							<span>młodzież</span> - lekcje dostosowane do programu szkolnego oraz przygotowujące do egzaminów, takich
							jak egzamin ósmoklasisty czy matura. Skupienie na komunikacji, pisaniu i słuchaniu w praktycznych
							kontekstach,
						</li>
						<li>
							<span>dorośli (18+)</span> - kursy tematyczne, takie jak poprawna komunikacja w biznesie, czy angielski na
							wakacjach. Program dostosowany do potrzeb i oczekiwań uczestnika.
						</li>
					</ul>
				</div>
				<div className='english-classes__benefits-text-content-box'>
					<FaHelmetSafety fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Kursy specjalistyczne</h3>
					<ul>
						<li>
							<span>przygotowanie do egzaminów</span> - skuteczna pomoc uczniom przygotowującym się do ważnych egzaminów
							z języka angielskiego. Koncentracja na wszystkich aspektach egzaminu,
						</li>
						<li>
							<span>konwersacje</span> - rozwijanie umiejętności mówienia w języku angielskim w swobodnej, przyjaznej
							atmosferze. Szczególnie polecane dla osób, które pragną poprawić swoją płynność w mówieniu, czy przełamać
							barierę językową i wypracować indywidulany styl wypowiedzi,
						</li>
						<li>
							<span>angielski w praktyce</span> - nauka języka angielskiego w kontekście praktycznym, dostosowanym do
							różnych dziedzin życia. Kursy te są idealne dla osób, które chcą rozwinąć swoje umiejętności językowe w
							określonym obszarze.
						</li>
					</ul>
				</div>
				<div className='english-classes__benefits-text-content-box'>
					<MdEmojiPeople fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Indywidualne podejście</h3>
					<ul>
						<li>
							Każdy kurs jest opracowywany z uwzględnieniem poziomu zaawansowania ucznia oraz jego celów edukacyjnych.
							Program nauczania może obejmować różne aspekty języka, takie jak gramatyka, słuchanie, mówienie, czytanie
							czy pisanie, a także specyficzne potrzeby, jak np. przygotowanie do egzaminów.
						</li>
						<li>
							Tempo zajęć jest dostosowane do ucznia, aby zapewnić komfortową naukę, bez presji i stresu. Zajęcia
							odbywają się w atmosferze wsparcia i zrozumienia, co pozwala uczniowi poczuć się swobodnie w trakcie
							nauki.
						</li>
						<li>
							Taki indywidualny program pomaga szybciej osiągnąć zamierzony cel, umożliwiając pełne skupienie na mocnych
							stronach ucznia oraz skuteczne pokonywanie trudności.
						</li>
					</ul>
				</div>
				<div className='english-classes__benefits-text-content-box'>
					<MdComputer fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Nowoczesne metody</h3>
					<ul>
						<li>
							<span>wykorzystanie aplikacji, gier edukacyjnych i platform interaktywnych</span> - korzystamy z
							nowoczesnych technologii, które wzbogacają tradycyjną metodę nauki i sprawiają, że proces edukacyjny staje
							się bardziej angażujący i efektywny.
						</li>
						<li>
							<span>atmosfera</span> - tworzymy atmosferę, która sprzyja koncentracji i motywuje do aktywnego
							uczestnictwa. Naszym celem jest, by każdy uczeń czuł się swobodnie i pewnie, niezależnie od poziomu
							znajomości języka.
						</li>
						<li>
							<span>od klasycznych lektur po współczesne teksty kultury</span> - używamy szerokiego wachlarza materiałów
							edukacyjnych, które odpowiadają na różne potrzeby uczniów i ich style uczenia się. Zajęcia obejmują nie
							tylko klasyczne lektury, ale również współczesne teksty kultury, takie jak artykuły, filmy, piosenki czy
							podcasty.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default memo(EnglishClassesBenefits);
