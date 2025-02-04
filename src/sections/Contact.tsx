import { ContactForm } from '../components/Forms/ContactForm';
import { FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
	return (
		<section className='contact' id='kontakt'>
			<div className='contact__container'>
				<div className='contact__title-box'>
					<h2 className='contact__title'>Kontakt</h2>
					<div className='contact__title-info-box white-gradient'>
						<div>
							<p>E-mail:</p>
							<p>Telefon:</p>
							<p>NIP:</p>
						</div>
						<div>
							<p>test@test.gmail.com</p>
							<p>111-111-111</p>
							<p>1234567890</p>
						</div>
					</div>
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
