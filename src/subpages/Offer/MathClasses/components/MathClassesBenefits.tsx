import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaHelmetSafety } from 'react-icons/fa6';
import { MdComputer, MdEmojiPeople, MdFamilyRestroom } from 'react-icons/md';

const MathClassesBenefits: React.FC = () => {
	const isLarge = useMediaQuery({ query: '(min-width: 1358px)' });

	return (
		<section className='math-classes__benefits'>
			<h2 className='math-classes__title'>Dlaczego my?</h2>
			<div className='math-classes__benefits-text-content'>
				<div className='math-classes__benefits-text-content-box'>
					<MdFamilyRestroom fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Różne grupy wiekowe</h3>
					<ul>
						<li>
							<span>dzieci</span> - nauka przez zabawę, gry edukacyjne i zadania interaktywne. Rozwijanie logicznego
							myślenia, podstawowych umiejętności matematycznych oraz przygotowanie do sprawdzianów i klasówek,
						</li>
						<li>
							<span>młodzież</span> - lekcje dostosowane do programu szkolnego oraz przygotowujące do egzaminów, takich
							jak egzamin ósmoklasisty czy matura. Skupienie na rozwiązywaniu różnych typów zadań, nauce strategii
							matematycznych i eliminowaniu problematycznych obszarów,
						</li>
						<li>
							<span>dorośli (18+)</span> - zajęcia dostosowane do indywidualnych potrzeb, np. przygotowanie do egzaminów
							na studia, nauka matematyki od podstaw lub rozwijanie umiejętności analitycznych potrzebnych w pracy.
						</li>
					</ul>
				</div>
				<div className='math-classes__benefits-text-content-box'>
					<FaHelmetSafety fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Kursy specjalistyczne</h3>
					<ul>
						<li>
							<span>przygotowanie do egzaminów</span> - skuteczna pomoc uczniom przygotowującym się do ważnych egzaminów
							lub olimpiad matematycznych. Koncentracja na wszystkich aspektach,
						</li>
						<li>
							<span>logika i jej wykorzystanie</span> - rozwijanie umiejętności związanych z logiką w celu zrozumienia
							jej podstaw i zależności. Szczególnie polecane dla osób, które pragną zrozumieć jak działają algorytmy lub
							są po prostu zainteresowane interakcją człowiek - komputer,
						</li>
						<li>
							<span>matematyka w praktyce</span> - nauka matematyki w kontekście praktycznym, dostosowanym do różnych
							dziedzin życia. Kursy te są idealne dla osób, które chcą rozwinąć swoje umiejętności matematyczne lub
							analityczne.
						</li>
					</ul>
				</div>
				<div className='math-classes__benefits-text-content-box'>
					<MdEmojiPeople fontSize={isLarge ? 70 : 56} color='#24485c' />
					<h3>Indywidualne podejście</h3>
					<ul>
						<li>
							Każdy kurs jest opracowywany z uwzględnieniem poziomu zaawansowania ucznia oraz jego celów edukacyjnych.
							Program nauczania może obejmować różne aspekty matematyczne, od samych podstaw dodawania, aż po
							zaawansowane operacje na logarytmach, czy trygonometrię.
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
				<div className='math-classes__benefits-text-content-box'>
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
							uczestnictwa. Naszym celem jest, by każdy uczeń czuł się swobodnie i pewnie, niezależnie od matematycznego
							poziomu.
						</li>
						<li>
							<span>od klasycznych twierdzeń po współczesne zagadnienia matematyczne</span> - używamy szerokiego
							wachlarza narzędzi matematycznych, które odpowiadają na różne potrzeby uczniów i ich style rozwiązywania
							problemów. Zajęcia obejmują nie tylko klasykę, ale również współczesne zagadnienia, takie jak algorytmy,
							modele statystyczne, teoria grafów czy rachunek różniczkowy.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default memo(MathClassesBenefits);
