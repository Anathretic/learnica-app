import { useMediaQuery } from 'react-responsive';
import { FaBook, FaPencilAlt, FaPenFancy } from 'react-icons/fa';

import InfoFirstImage from '/images/subpages/team-subpages/about-us/info-images/first-info-image.jpg';
import InfoSecondImage from '/images/subpages/team-subpages/about-us/info-images/second-info-image.jpg';
import InfoThirdImage from '/images/subpages/team-subpages/about-us/info-images/third-info-image.jpg';
import InfoFourthImage from '/images/subpages/team-subpages/about-us/info-images/fourth-info-image.jpg';

const AboutUsInfo: React.FC = () => {
	const isLarge = useMediaQuery({ query: '(min-width: 1358px)' });

	return (
		<section className='about-us__info'>
			<div className='about-us__info-container'>
				<h2 className='about-us__info-title'>Kim jesteśmy?</h2>
				<div className='about-us__info-content-container'>
					<div className='about-us__info-content-box'>
						<img src={InfoFirstImage} alt='Obrazek przedstawiający zespół nauczycieli' />
						<h3>Edukacja to nasza pasja</h3>
						<p>
							Od kilku lat z zaangażowaniem uczymy matematyki, języka polskiego i angielskiego – zarówno indywidualnie,
							jak i w małych grupach. Nauczanie to dla nas coś więcej niż praca, to sposób na dzielenie się wiedzą i
							inspirowanie innych do rozwoju. Każda lekcja to dla nas okazja, by wspierać uczniów w odkrywaniu ich
							potencjału. Pasja do nauczania sprawiła, że postanowiliśmy stworzyć coś własnego – i tak powstała
							Learnica.
						</p>
					</div>
					<div className='about-us__info-special-decoration' />
					<div className='about-us__info-content-box'>
						<img src={InfoSecondImage} alt='Obrazek przedstawiający zespół pracowników biurowych' />
						<h3>Doświadczenie i świeże spojrzenie</h3>
						<p>
							Jesteśmy młodymi lektorami i nauczycielami, ale za nami już kilka lat praktyki oraz setki godzin
							spędzonych na prowadzeniu zajęć. Znamy realia szkoły, rozumiemy potrzeby uczniów i wiemy, że skuteczna
							nauka to nie tylko podręcznik. Łączymy solidne przygotowanie merytoryczne z energią, kreatywnością i
							podejściem, które naprawdę działa. Wierzymy, że dobre relacje z uczniem to podstawa efektywnej edukacji –
							dlatego stawiamy na otwartość i wzajemne zaufanie.
						</p>
					</div>
					<div className='about-us__info-special-decoration' />
					<div className='about-us__info-content-box'>
						<img
							src={InfoThirdImage}
							alt='Obrazek przedstawiający kostkę z napisem start oraz buty stojące przed nią'
						/>
						<h3>Learnica – nauka po nowemu</h3>
						<p>
							Learnica to nasza odpowiedź na zmieniające się potrzeby uczniów i rodziców. Połączyliśmy nasze
							doświadczenie, by stworzyć platformę do nauki online oraz miejsce do zajęć stacjonarnych. Dzięki temu
							uczniowie mogą uczyć się w swoim tempie i w wygodny dla siebie sposób. Korzystamy z nowoczesnych narzędzi,
							ale nie zapominamy o tym, co najważniejsze – relacji i indywidualnym podejściu. U nas technologia wspiera,
							a nie zastępuje nauczyciela.
						</p>
					</div>
					<div className='about-us__info-special-decoration' />
					<div className='about-us__info-content-box'>
						<img src={InfoFourthImage} alt='Obrazek przedstawiający trójkę dzieci wracających ze szkoły' />
						<h3>Uczeń w centrum uwagi</h3>
						<p>
							Wierzymy, że każdy uczeń jest inny – ma własne tempo, styl nauki i potrzeby. Dlatego tworzymy przestrzeń,
							w której każdy może czuć się swobodnie i bezpiecznie. Uczymy z empatią, stawiając na cierpliwość,
							zrozumienie i otwartość na pytania. Zawsze szukamy najlepszych sposobów, by dotrzeć do ucznia i wspólnie
							pokonywać trudności. Dla nas najważniejsze jest to, by uczeń nie tylko rozumiał materiał, ale też wierzył
							w swoje możliwości.
						</p>
					</div>
					<div className='about-us__info-first-icon-box'>
						<FaBook
							className='about-us__info-first-box-icon about-us__info-first-box-icon--first'
							fontSize={isLarge ? 70 : 62}
						/>
						<FaPencilAlt
							className='about-us__info-first-box-icon about-us__info-first-box-icon--second'
							fontSize={isLarge ? 66 : 60}
						/>
						<FaPenFancy className='about-us__info-first-box-icon about-us__info-first-box-icon--third' fontSize={54} />
						<FaBook className='about-us__info-first-box-icon about-us__info-first-box-icon--fourth' fontSize={62} />
						<FaPencilAlt
							className='about-us__info-first-box-icon about-us__info-first-box-icon--fifth'
							fontSize={isLarge ? 74 : 66}
						/>
						<FaPenFancy className='about-us__info-first-box-icon about-us__info-first-box-icon--sixth' fontSize={54} />
						<FaBook className='about-us__info-first-box-icon about-us__info-first-box-icon--seventh' fontSize={62} />
						<FaPencilAlt
							className='about-us__info-first-box-icon about-us__info-first-box-icon--eighth'
							fontSize={isLarge ? 72 : 64}
						/>
					</div>
					<div className='about-us__info-second-icon-box'>
						<FaPencilAlt
							className='about-us__info-second-box-icon about-us__info-second-box-icon--first'
							fontSize={70}
						/>
						<FaPenFancy
							className='about-us__info-second-box-icon about-us__info-second-box-icon--second'
							fontSize={66}
						/>
						<FaBook className='about-us__info-second-box-icon about-us__info-second-box-icon--third' fontSize={54} />
						<FaPenFancy
							className='about-us__info-second-box-icon about-us__info-second-box-icon--fourth'
							fontSize={62}
						/>
						<FaBook className='about-us__info-second-box-icon about-us__info-second-box-icon--fifth' fontSize={74} />
						<FaPencilAlt
							className='about-us__info-second-box-icon about-us__info-second-box-icon--sixth'
							fontSize={54}
						/>
						<FaPencilAlt
							className='about-us__info-second-box-icon about-us__info-second-box-icon--seventh'
							fontSize={62}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsInfo;
