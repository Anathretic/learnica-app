import { FaBook, FaPencilAlt, FaPenFancy } from 'react-icons/fa';
import IdeaFirstImage from '../images/idea-section/idea-first-image.jpg';
import IdeaSecondImage from '../images/idea-section/idea-second-image.jpg';
import IdeaThirdImage from '../images/idea-section/idea-third-image.jpg';

const Idea: React.FC = () => {
	return (
		<section id='idea' className='idea'>
			<div className='idea__container'>
				<h2 className='idea__title'>Idea</h2>
				<div className='idea__content-container'>
					<div className='idea__content-box'>
						<img src={IdeaFirstImage} alt='' />
						<h3>I. Określenie problemu nauczania</h3>
						<p>
							Wielu uczniów boryka się z trudnościami w nauce matematyki, polskiego i angielskiego. Problemem może być
							brak zrozumienia podstawowych zagadnień, zbyt szybkie tempo nauki w szkole czy niewystarczająca motywacja.
							W matematyce uczniowie często napotykają trudności z abstrakcyjnym myśleniem, w języku polskim – z
							gramatyką i pisownią, a w angielskim – z przyswajaniem słownictwa i gramatyki. To prowadzi do frustracji,
							spadku wyników i obniżonej pewności siebie w nauce.
						</p>
					</div>
					<div className='idea__special-decoration' />
					<div className='idea__content-box'>
						<img src={IdeaSecondImage} alt='' />
						<h3>II. Stworzenie rozwiązania</h3>
						<p>
							Nasza firma opracowała kompleksowe podejście do nauki, które łączy indywidualne podejście z nowoczesnymi
							metodami dydaktycznymi. Zajęcia matematyczne, polonistyczne i językowe są dostosowane do poziomu ucznia,
							co pozwala na efektywne wyeliminowanie trudności. Korzystamy z nowoczesnych materiałów edukacyjnych, które
							angażują uczniów i rozwijają ich zdolności w sposób przystępny i interesujący. Dzięki indywidualnym
							konsultacjom i dostosowanym planom nauki, uczniowie zyskują pewność siebie i motywację do nauki.
						</p>
					</div>
					<div className='idea__special-decoration' />
					<div className='idea__content-box'>
						<img src={IdeaThirdImage} alt='' />
						<h3>III. Realizacja i realna pomoc uczniom</h3>
						<p>
							Dzięki naszej metodzie uczniowie szybko zauważają realne postępy. Zajęcia prowadzone są przez
							wykwalifikowanych nauczycieli, którzy potrafią dostosować tempo nauki do potrzeb ucznia. Regularne testy,
							zadania domowe i materiały kontrolne pomagają monitorować postępy i na bieżąco korygować ewentualne błędy.
							Realna pomoc polega także na wsparciu emocjonalnym i motywacyjnym, co sprawia, że uczniowie stają się
							bardziej pewni siebie i chętni do dalszej nauki. Nasza oferta to nie tylko nauka, ale także budowanie
							pozytywnego podejścia do nauki.
						</p>
					</div>
					<div className='idea__first-icon-box'>
						<FaBook className='idea__first-box-icon idea__first-box-icon--first' fontSize={70} />
						<FaPencilAlt className='idea__first-box-icon idea__first-box-icon--second' fontSize={66} />
						<FaPenFancy className='idea__first-box-icon idea__first-box-icon--third' fontSize={54} />
						<FaBook className='idea__first-box-icon idea__first-box-icon--fourth' fontSize={62} />
						<FaPencilAlt className='idea__first-box-icon idea__first-box-icon--fifth' fontSize={80} />
						<FaPenFancy className='idea__first-box-icon idea__first-box-icon--sixth' fontSize={54} />
						<FaBook className='idea__first-box-icon idea__first-box-icon--seventh' fontSize={62} />
						<FaPencilAlt className='idea__first-box-icon idea__first-box-icon--eighth' fontSize={80} />
					</div>
					<div className='idea__second-icon-box'>
						<FaPencilAlt className='idea__second-box-icon idea__second-box-icon--first' fontSize={70} />
						<FaPenFancy className='idea__second-box-icon idea__second-box-icon--second' fontSize={66} />
						<FaBook className='idea__second-box-icon idea__second-box-icon--third' fontSize={54} />
						<FaPenFancy className='idea__second-box-icon idea__second-box-icon--fourth' fontSize={62} />
						<FaBook className='idea__second-box-icon idea__second-box-icon--fifth' fontSize={80} />
						<FaPencilAlt className='idea__second-box-icon idea__second-box-icon--sixth' fontSize={54} />
						<FaPencilAlt className='idea__second-box-icon idea__second-box-icon--seventh' fontSize={62} />
					</div>
				</div>
			</div>
			<div className='idea__special-block idea__special-block--left' />
			<div className='idea__special-block idea__special-block--right' />
		</section>
	);
};

export default Idea;
