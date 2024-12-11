import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCheckSessionStatus } from '../hooks/useCheckSessionStatus';

const Welcome: React.FC = () => {
	const { checkSessionStatus } = useCheckSessionStatus();

	useEffect(() => {
		checkSessionStatus();
	}, []);

	return (
		<section>
			<div>
				<h1>Aplikacja do nauki</h1>
			</div>
			<div>
				<Link to='/logowanie'>Logowanie</Link>
				<br />
				<Link to='/rejestracja'>Rejestracja</Link>
			</div>
		</section>
	);
};

export default Welcome;
