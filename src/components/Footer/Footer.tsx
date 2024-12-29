import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaRegCopyright, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { scrollToTop } from '../../utils/scrollToTopUtils';

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<footer className='footer'>
			<div className='footer__bar footer__bar--first' />
			<div className='footer__container'>
				<div className='footer__box'>
					<h3>learnica</h3>
					<p>Z nami nauka będzie niezapomnianą przygodą!</p>
					<div>
						<a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
							<FaFacebookSquare fontSize={isMobile ? 20 : 25} />
						</a>
						<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
							<FaInstagram fontSize={isMobile ? 20 : 25} />
						</a>
						<a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
							<FaLinkedin fontSize={isMobile ? 20 : 25} />
						</a>
					</div>
				</div>
				<div className='footer__box'>
					<h3>Oferta</h3>
					<ul>
						<li>
							<Link to='/jezyk-polski' onClick={scrollToTop}>
								Język polski
							</Link>
						</li>
						<li>
							<Link to='/jezyk-angielski' onClick={scrollToTop}>
								Język angielski
							</Link>
						</li>
						<li>
							<Link to='/matematyka' onClick={scrollToTop}>
								Matematyka
							</Link>
						</li>
						<li>
							<Link to='/tlumaczenia' onClick={scrollToTop}>
								Tłumaczenia
							</Link>
						</li>
					</ul>
				</div>
				<div className='footer__box'>
					<h3>Zespół</h3>
					<ul>
						<li>
							<Link to='/o-nas' onClick={scrollToTop}>
								O nas
							</Link>
						</li>
						<li>
							<Link to='/program-nauczania' onClick={scrollToTop}>
								Program nauczania
							</Link>
						</li>
						<li>
							<Link to='/lektorzy' onClick={scrollToTop}>
								Lektorzy
							</Link>
						</li>
					</ul>
				</div>
				<div className='footer__box'>
					<h3>Więcej</h3>
					<ul>
						<li>
							<Link to='/logowanie' onClick={scrollToTop}>
								Logowanie
							</Link>
						</li>
						<li>
							<Link to='/rejestracja' onClick={scrollToTop}>
								Rejestracja
							</Link>
						</li>
						<li>
							<Link to='/polityka-prywatnosci' onClick={scrollToTop}>
								Polityka prywatności
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer__bar footer__bar--second' />
			<div className='footer__copyright-box'>
				<FaRegCopyright className='footer__copyright-icon' />
				<p className='footer__company-name'> {currentYear} learnica</p>
			</div>
		</footer>
	);
};
