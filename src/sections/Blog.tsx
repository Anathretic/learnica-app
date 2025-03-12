import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { blogGraph } from '../graphql/graphs';
import { BlogCarousel } from '../components/Blog/BlogCarousel';
import { Loader } from '../components/Loader';

const Blog: React.FC = () => {
	const { data, error, loading, refetch } = useQuery(blogGraph);
	const [isLoading, setIsLoading] = useState(loading);

	const handleReFetchButton = async () => {
		setIsLoading(true);
		await refetch();
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(loading);
	}, [loading]);

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
						<BlogCarousel slides={data.articlesCollection.edges} />
					)}
				</div>
			</div>
			<div className='blog__special-block blog__special-block--left' />
			<div className='blog__special-block blog__special-block--right' />
		</section>
	);
};

export default Blog;
