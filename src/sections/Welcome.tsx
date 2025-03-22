import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { FaBook, FaPencilAlt, FaPenFancy } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

const Welcome: React.FC = () => {
	const isLarge = useMediaQuery({ query: '(min-width: 1358px)' });

	return (
		<section className='welcome'>
			<div className='welcome__wrapper'>
				<div className='welcome__text-container'>
					<h1>Learnica</h1>
					<p>Zachowujemy tradycję, wprowadzamy nowoczesność – nauka w Twoim stylu!</p>
					<div className='welcome__btn-box'>
						<HashLink smooth to='/#oferta'>
							Oferta
						</HashLink>
					</div>
					<FaBook
						className='welcome__text-container-icon welcome__text-container-icon--first'
						fontSize={isLarge ? 70 : 56}
					/>
					<FaPencilAlt className='welcome__text-container-icon welcome__text-container-icon--second' fontSize={66} />
					<FaPenFancy className='welcome__text-container-icon welcome__text-container-icon--third' fontSize={54} />
					<FaBook
						className='welcome__text-container-icon welcome__text-container-icon--fourth'
						fontSize={isLarge ? 62 : 50}
					/>
					<FaPencilAlt
						className='welcome__text-container-icon welcome__text-container-icon--fifth'
						fontSize={isLarge ? 80 : 54}
					/>
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
