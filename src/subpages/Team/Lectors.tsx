import { Helmet } from 'react-helmet-async';

const Lectors: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Lektorzy | Learnica</title>
				<meta
					name='description'
					content='Poznaj naszych lektorów – doświadczeni nauczyciele języka polskiego, angielskiego i matematyki.'
				/>
				<meta property='og:title' content='Lektorzy | Learnica' />
				<meta property='og:description' content='Poznaj zespół specjalistów, którzy wspierają rozwój Twojej wiedzy.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/lektorzy' />
				<link rel='canonical' href='https://learnica.pl/lektorzy' />
			</Helmet>
			<main>
				<div>
					<h1>Lektorzy</h1>
				</div>
			</main>
		</>
	);
};

export default Lectors;
