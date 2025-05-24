import { Link } from 'react-router-dom';
import { ClassesForm } from '../../../../components/Forms/ClassesForm';
import { FaPaperPlane } from 'react-icons/fa';

const TranslationsForm: React.FC = () => {
	return (
		<section className='translations__form'>
			<div className='translations__form-container'>
				<div className='translations__form-title-box'>
					<h2 className='translations__form-title'>Tłumaczymy?</h2>
					<p className='translations__form-title-subtext'>
						Nie zwlekaj! Jeśli masz jakiś dokument do przetłumaczenia odezwij się do nas! Mamy potrzebne doświadczenie i
						setki zadowolonych klientów.
					</p>
					<p className='polish-classes__form-title-subtext'>
						Chciałbyś wiedzieć więcej? <Link to='/o-nas'>Poznaj nas!</Link>
					</p>
					<p className='translations__form-title-subtext'>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą <Link to='/polityka-prywatnosci'>polityką prywatności.</Link>
					</p>
					<ul className='translations__form-title-info-box'>
						<li>
							<p>Wybierz nas:</p>
							<p className='translations__form-special-text'>- tłumacze z doświadczeniem</p>
							<p>- szybka realizacja zleceń</p>
							<p>- możliwość stałej współpracy</p>
						</li>
						<li>
							<p>Dokumenty przyjmujemy:</p>
							<p>
								- <span>stacjonarnie</span> - wypełnij formularz i umówmimy się na spotkanie -{' '}
								<span>chwilowo obejmuje to Lublin, Zamość oraz Hrubieszów.</span>
							</p>
							<p>
								- <span>online</span> - jeśli wolisz wszystko załatwić od ręki to napisz o tym w wiadomości. Nasz
								pracownik poprosi o dosłanie dokumentów i od razu weźmie się za wycenę!
							</p>
						</li>
					</ul>
					<FaPaperPlane className='translations__icon translations__icon--first' fontSize={80} />
					<FaPaperPlane className='translations__icon translations__icon--second' fontSize={76} />
					<FaPaperPlane className='translations__icon translations__icon--third' fontSize={72} />
					<FaPaperPlane className='translations__icon translations__icon--fourth' fontSize={66} />
					<FaPaperPlane className='translations__icon translations__icon--fifth' fontSize={82} />
				</div>
				<ClassesForm />
			</div>
		</section>
	);
};

export default TranslationsForm;
