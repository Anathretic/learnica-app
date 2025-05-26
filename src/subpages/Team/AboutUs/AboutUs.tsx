import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AboutUsInfo } from './components';

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
			<main className='about-us'>
				<div className='about-us__container'>
					<div className='about-us__wrapper'>
						<div className='about-us__hero-image'>
							<h1 className='about-us__hero-image-title'>O nas</h1>
						</div>
						<AboutUsInfo />
						<Link className='about-us__return-btn' to='/'>
							Powrót
						</Link>
					</div>
				</div>
			</main>
		</>
	);
};

export default AboutUs;
