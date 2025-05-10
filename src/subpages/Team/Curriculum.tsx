import { Helmet } from 'react-helmet-async';

const Curriculum: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Program Nauczania | Learnica</title>
				<meta
					name='description'
					content='Poznaj nasz autorski program nauczania, dostosowany do indywidualnych potrzeb uczniów i firm.'
				/>
				<meta property='og:title' content='Program Nauczania | Learnica' />
				<meta
					property='og:description'
					content='Indywidualne podejście do ucznia – skuteczny i sprawdzony program nauczania.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/program-nauczania' />
				<link rel='canonical' href='https://learnica.pl/program-nauczania' />
			</Helmet>
			<main>
				<div>
					<h1>Program nauczania</h1>
				</div>
			</main>
		</>
	);
};

export default Curriculum;
