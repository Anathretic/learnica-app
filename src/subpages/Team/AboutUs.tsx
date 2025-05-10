import { Helmet } from 'react-helmet-async';

const AboutUs: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>O nas | Learnica</title>
				<meta
					name='description'
					content='Dowiedz się więcej o Learnica – nasza misja, wartości i zespół. Uczymy z pasją i zaangażowaniem.'
				/>
				<meta property='og:title' content='O nas | Learnica' />
				<meta property='og:description' content='Zespół pasjonatów edukacji. Poznaj nas bliżej.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/o-nas' />
				<link rel='canonical' href='https://learnica.pl/o-nas' />
			</Helmet>
			<main>
				<div>
					<h1>O nas</h1>
				</div>
			</main>
		</>
	);
};

export default AboutUs;
