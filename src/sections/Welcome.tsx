import { HashLink } from 'react-router-hash-link';
import { FaBook, FaPencilAlt, FaPenFancy } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

const Welcome: React.FC = () => {
	return (
		<section className='welcome'>
			<div className='welcome__wrapper'>
				<div className='welcome__text-container'>
					<h1>Learnica</h1>
					<p>Lekcje na wyciągnięcie ręki..</p>
					<div className='welcome__btn-box'>
						<HashLink smooth to='/#oferta'>
							Oferta
						</HashLink>
					</div>
					<FaBook className='welcome__text-container-icon welcome__text-container-icon--first' fontSize={70} />
					<FaPencilAlt className='welcome__text-container-icon welcome__text-container-icon--second' fontSize={66} />
					<FaPenFancy className='welcome__text-container-icon welcome__text-container-icon--third' fontSize={54} />
					<FaBook className='welcome__text-container-icon welcome__text-container-icon--fourth' fontSize={62} />
					<FaPencilAlt className='welcome__text-container-icon welcome__text-container-icon--fifth' fontSize={80} />
				</div>
			</div>
			<div className='welcome__image-container'></div>
			<div className='welcome__icon-container'>
				<HashLink smooth to='/#idea' className='welcome__arrow-icon'>
					<SlArrowDown fontSize={60} color='#f0f0f0' />
				</HashLink>
			</div>
		</section>
	);
};

export default Welcome;
