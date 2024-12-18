import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaRegCopyright } from 'react-icons/fa';
import { HiClipboardDocumentList } from 'react-icons/hi2';
import { scrollToTop } from '../../utils/scrollToTopUtils';

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

	return (
		<footer className='footer'>
			<div className='footer__bar' />
			<div className='footer__container'>
				<div className='footer__box'>
					<FaRegCopyright className='footer__copyright-icon' />
					<p className='footer__company-name'> {currentYear} lernica</p>
				</div>
				<div className='footer__box'>
					<Link to='/polityka-prywatnosci' className='footer__link' onClick={scrollToTop}>
						<HiClipboardDocumentList fontSize={isMobile ? 20 : 25} />
					</Link>
				</div>
			</div>
		</footer>
	);
};
