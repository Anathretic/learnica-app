import { ClassesForm } from '../../../../components/Forms/ClassesForm';
import { FaPaperPlane } from 'react-icons/fa';

const TranslationsForm: React.FC = () => {
	return (
		<section className='translations__form'>
			<div className='translations__form-container'>
				<div className='translations__form-title-box'>
					<h2 className='translations__form-title'>Zaczynamy?</h2>
					<p className='translations__form-title-subtext'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eius provident architecto corrupti dolorum,
						ullam incidunt, numquam doloremque optio dolore tempora at totam nemo minus aspernatur ut animi sunt impedit
						doloribus temporibus.
					</p>
					<p className='translations__form-title-subtext'>
						<span>Lorem!</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolores sunt rem
						aliquid exercitationem officia, corrupti illo excepturi!
					</p>
					<ul className='translations__form-title-info-box'>
						<li>
							<p>Lorem, ipsum:</p>
							<p className='translations__form-special-text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam quod rem deleniti eius vero,
								delectus incidunt dolor.<span> Lorem ipsum dolor sit amet consectetur.</span>
							</p>
						</li>
						<li>
							<p>Lorem, ipsum:</p>
							<p>- Lorem ipsum dolor sit amet consectetur.</p>
							<p>- Lorem ipsum dolor sit amet consectetur.</p>
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
