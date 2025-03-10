import { useEffect, useState } from 'react';
import { BlogCarousel } from '../components/Blog/BlogCarousel';
import { Loader } from '../components/Loader';
import { getBlogData } from '../helpers/getDataHelpers';
import { SlideDataModel } from '../models/blogCarousel.model';

const Blog: React.FC = () => {
	const [slides, setSlides] = useState<SlideDataModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (isLoading) getBlogData({ setSlides, setIsLoading, setError });
	}, [isLoading]);

	const handleReFetchButton = () => {
		setError(false);
		setIsLoading(true);
	};

	return (
		<section id='blog' className='blog'>
			<div className='blog__container'>
				<div className='blog__wrapper'>
					<h2 className='blog__title'>Blog</h2>
					{isLoading ? (
						<Loader className='blog__loader' />
					) : error ? (
						<div className='blog__error-box'>
							<p>Niestety wystąpił błąd.. Spróbuj jeszcze raz!</p>
							<button type='button' onClick={handleReFetchButton}>
								Pobierz
							</button>
						</div>
					) : (
						<BlogCarousel slides={slides} />
					)}
				</div>
			</div>
			<div className='blog__special-block blog__special-block--left' />
			<div className='blog__special-block blog__special-block--right' />
		</section>
	);
};

export default Blog;
