import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';

const Welcome: React.FC = () => {
	return (
		<section style={{ minHeight: '100vh' }}>
			<div>
				<h1>Aplikacja do nauki</h1>
			</div>
			<div>
				<Link to='/logowanie' onClick={scrollToTop}>
					Logowanie
				</Link>
				<br />
				<Link to='/rejestracja' onClick={scrollToTop}>
					Rejestracja
				</Link>
			</div>
		</section>
	);
};

export default Welcome;
