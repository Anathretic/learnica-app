import { ClassesForm } from '../../../../components/Forms/ClassesForm';
import { FaPaperPlane } from 'react-icons/fa';

const EnglishClassesForm: React.FC = () => {
	return (
		<section className='english-classes__form'>
			<div className='english-classes__form-container'>
				<div className='english-classes__form-title-box'>
					<h2 className='english-classes__form-title'>Zaczynamy?</h2>
					<p className='english-classes__form-title-subtext'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eius provident architecto corrupti dolorum,
						ullam incidunt, numquam doloremque optio dolore tempora at totam nemo minus aspernatur ut animi sunt impedit
						doloribus temporibus.
					</p>
					<p className='english-classes__form-title-subtext'>
						<span>Lorem!</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolores sunt rem
						aliquid exercitationem officia, corrupti illo excepturi!
					</p>
					<ul className='english-classes__form-title-info-box'>
						<li>
							<p>Lorem, ipsum:</p>
							<p className='english-classes__form-special-text'>
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
					<FaPaperPlane className='english-classes__icon english-classes__icon--first' fontSize={80} />
					<FaPaperPlane className='english-classes__icon english-classes__icon--second' fontSize={76} />
					<FaPaperPlane className='english-classes__icon english-classes__icon--third' fontSize={72} />
					<FaPaperPlane className='english-classes__icon english-classes__icon--fourth' fontSize={66} />
					<FaPaperPlane className='english-classes__icon english-classes__icon--fifth' fontSize={82} />
				</div>
				<ClassesForm />
			</div>
		</section>
	);
};

export default EnglishClassesForm;
