import { Link } from 'react-router-dom';
import { ClassesForm } from '../../../../components/Forms/ClassesForm';
import { scrollToTop } from '../../../../utils/scrollToTopUtils';
import { FaPaperPlane } from 'react-icons/fa';

const PolishClassesForm: React.FC = () => {
	return (
		<section className='polish-classes__form'>
			<div className='polish-classes__form-container'>
				<div className='polish-classes__form-title-box'>
					<h2 className='polish-classes__form-title'>Zaczynamy?</h2>
					<p className='polish-classes__form-title-subtext'>
						Nie zwlekaj! Rozpocznij swoją przygodę z językiem polskim już dziś! Dołącz do naszej społeczności uczniów,
						którzy rozwijają swoje umiejętności z radością i osiągają wyznaczone cele.
					</p>
					<p className='polish-classes__form-title-subtext'>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą{' '}
						<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
							polityką prywatności.
						</Link>
					</p>
					<ul className='polish-classes__form-title-info-box'>
						<li>
							<p>Wybierz nas:</p>
							<p className='polish-classes__form-special-text'>
								- <span>wykwalifikowani nauczyciele z doświadczeniem</span> i pasją do języka polskiego
							</p>
							<p>
								- <span>elastyczne godziny zajęć</span>, dostosowane do planu ucznia
							</p>
							<p>
								- <span>indywidualne podejście</span> – Wasze potrzeby są dla nas priorytetem!
							</p>
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
					<FaPaperPlane className='polish-classes__icon polish-classes__icon--first' fontSize={80} />
					<FaPaperPlane className='polish-classes__icon polish-classes__icon--second' fontSize={76} />
					<FaPaperPlane className='polish-classes__icon polish-classes__icon--third' fontSize={72} />
					<FaPaperPlane className='polish-classes__icon polish-classes__icon--fourth' fontSize={66} />
					<FaPaperPlane className='polish-classes__icon polish-classes__icon--fifth' fontSize={82} />
				</div>
				<ClassesForm />
			</div>
		</section>
	);
};

export default PolishClassesForm;
