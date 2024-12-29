import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';
import { scrollToTop } from '../utils/scrollToTopUtils';

const Welcome: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

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
