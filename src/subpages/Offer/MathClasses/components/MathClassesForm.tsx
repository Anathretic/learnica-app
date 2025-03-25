import { Link } from 'react-router-dom';
import { ClassesForm } from '../../../../components/Forms/ClassesForm';
import { scrollToTop } from '../../../../utils/scrollToTopUtils';
import { FaPaperPlane } from 'react-icons/fa';

const MathClassesForm: React.FC = () => {
	return (
		<section className='math-classes__form'>
			<div className='math-classes__form-container'>
				<div className='math-classes__form-title-box'>
					<h2 className='math-classes__form-title'>Zaczynamy?</h2>
					<p className='math-classes__form-title-subtext'>
						Nie zwlekaj! Rozpocznij swoją przygodę z matematyką już dziś! Dołącz do naszej społeczności uczniów, którzy
						rozwijają swoje umiejętności z radością i osiągają wyznaczone cele.
					</p>
					<p className='math-classes__form-title-subtext'>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className='math-classes__form-title-info-box'>
						<li>
							<p>Wybierz nas:</p>
							<p className='polish-classes__form-special-text'>- wykwalifikowani nauczyciele z doświadczeniem</p>
							<p>- elastyczne godziny zajęć</p>
							<p>- indywidualne podejście</p>
						</li>
						<li>
							<p>Lekcje odbywają się:</p>
							<p>
								- <span>stacjonarnie</span> - aktywnie dojeżdzamy do uczniów na terenie{' '}
								<span>Lublina, Zamościa oraz Hrubieszowa</span>. W planach mamy kolejne miasta!
							</p>
							<p>
								- <span>online</span> - lekcje prowadzone za pomocą <span>Microsoft Teams</span> oraz odpowiednich
								narzędzi. <span>Już niedługo wszystko będze odbywać się na naszej oficjalnej platformie!</span>
							</p>
						</li>
					</ul>
					<FaPaperPlane className='math-classes__icon math-classes__icon--first' fontSize={80} />
					<FaPaperPlane className='math-classes__icon math-classes__icon--second' fontSize={76} />
					<FaPaperPlane className='math-classes__icon math-classes__icon--third' fontSize={72} />
					<FaPaperPlane className='math-classes__icon math-classes__icon--fourth' fontSize={66} />
					<FaPaperPlane className='math-classes__icon math-classes__icon--fifth' fontSize={82} />
				</div>
				<ClassesForm />
			</div>
		</section>
	);
};

export default MathClassesForm;
