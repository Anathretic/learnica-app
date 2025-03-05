import { ContactForm } from '../components/Forms/ContactForm';
import { FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
	return (
		<section className='contact' id='kontakt'>
			<div className='contact__container'>
				<div className='contact__title-box'>
					<h2 className='contact__title'>Kontakt</h2>
					<p className='contact__title-subtext'>
						Gotowy by zacząć naukę? Świetnie! Ale jeśli Twoją głowę męczy jakieś pytanie skorzystaj z formularza
						kontaktowego lub zadzwoń na poniższy numer!
					</p>
					<p className='contact__title-subtext'>
						<span>Pamiętaj!</span> Wysyłając formularz wyrażasz zgodę na przetwarzanie Twoich danych zgodnie z
						obowiązującą polityką prywatności.
					</p>
					<ul className='contact__title-info-box'>
						<li>
							<p>E-mail:</p>
							<p>test@gmail.com</p>
						</li>
						<li>
							<p>Telefon:</p>
							<p>+48 111 222 333</p>
						</li>
						<li>
							<p>NIP:</p>
							<p>123-456-78-90</p>
						</li>
					</ul>
					<FaPaperPlane className='contact__title-icon contact__title-icon--first' fontSize={80} />
					<FaPaperPlane className='contact__title-icon contact__title-icon--second' fontSize={76} />
					<FaPaperPlane className='contact__title-icon contact__title-icon--third' fontSize={72} />
					<FaPaperPlane className='contact__title-icon contact__title-icon--fourth' fontSize={66} />
					<FaPaperPlane className='contact__title-icon contact__title-icon--fifth' fontSize={82} />
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
