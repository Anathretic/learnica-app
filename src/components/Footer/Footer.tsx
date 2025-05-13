import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { footerMoreItems, footerOfferItems, footerTeamItems } from './footerItems/footerItems';
import { FaRegCopyright, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

import BlueLogo from '/images/logo/blue-logo.svg';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<footer className='footer'>
			<div className='footer__bar footer__bar--first' />
			<div className='footer__container'>
				<div className='footer__box'>
					<h2>
						<img src={BlueLogo} alt='' />
						<span>earnica</span>
					</h2>
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
						{footerOfferItems.map((item, id) => (
							<li key={id}>
								<Link to={item.to}>{item.content}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='footer__box'>
					<h3>Zespół</h3>
					<ul>
						{footerTeamItems.map((item, id) => (
							<li key={id}>
								<Link to={item.to}>{item.content}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='footer__box'>
					<h3>Więcej</h3>
					<ul>
						{footerMoreItems.map((item, id) => (
							<li key={id}>
								<Link to={item.to}>{item.content}</Link>
							</li>
						))}
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

export default Footer;
