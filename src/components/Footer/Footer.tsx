import { useMediaQuery } from 'react-responsive';
import { FaRegCopyright, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
							<Link to='/jezyk-polski'>Język polski</Link>
						</li>
						<li>
							<Link to='/jezyk-angielski'>Język angielski</Link>
						</li>
						<li>
							<Link to='/matematyka'>Matematyka</Link>
						</li>
						<li>
							<Link to='/tlumaczenia'>Tłumaczenia</Link>
						</li>
					</ul>
				</div>
				<div className='footer__box'>
					<h3>Zespół</h3>
					<ul>
						<li>
							<Link to='/o-nas'>O nas</Link>
						</li>
						<li>
							<Link to='/program-nauczania'>Program nauczania</Link>
						</li>
						<li>
							<Link to='/lektorzy'>Lektorzy</Link>
						</li>
					</ul>
				</div>
				<div className='footer__box'>
					<h3>Więcej</h3>
					<ul>
						<li>
							<Link to='/logowanie'>Logowanie</Link>
						</li>
						<li>
							<Link to='/rejestracja'>Rejestracja</Link>
						</li>
						<li>
							<Link to='/polityka-prywatnosci'>Polityka prywatności</Link>
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
