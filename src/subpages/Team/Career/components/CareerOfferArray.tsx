import { Link } from 'react-router-dom';
import { useState } from 'react';

export type JobCategory = 'lektor' | 'tłumacz' | 'it' | 'inne';

export interface JobOffer {
	id: number;
	title: string;
	description: string;
	category: JobCategory;
}

const jobOffersData: JobOffer[] = [
	{
		id: 1,
		title: 'Lektor języka angielskiego',
		description: 'Poszukujemy lektora..',
		category: 'lektor',
	},
	{ id: 2, title: 'Tłumacz polsko-angielski', description: 'Zlecenia tłumaczeń dokumentów...', category: 'tłumacz' },
	{ id: 3, title: 'Frontend Developer', description: 'Rozwój apliakcji React...', category: 'it' },
	{ id: 4, title: 'Asystent biura', description: 'Wsparcie administracyjne...', category: 'inne' },
];

const CareerOfferArray: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<JobCategory | 'all'>('all');

	const filteredJobs = jobOffersData.filter(job => {
		const matchesSearch =
			job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			job.description.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;

		return matchesSearch && matchesCategory;
	});

	return (
		<section className='career__offer-array'>
			<div className='career__offer-array-container'>
				<h2 className='career__offer-array-title'>Oferty pracy</h2>
				<div className='career__offer-array-element'>
					<div className='career__offer-array-filter-elements'>
						<input
							className='career__offer-array-search-input'
							type='text'
							placeholder='Szukaj ogłoszeń...'
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
						/>
						<select
							className='career__offer-array-select'
							value={selectedCategory}
							onChange={e => setSelectedCategory(e.target.value as JobCategory | 'all')}>
							<option value='all'>Wszystkie</option>
							<option value='lektor'>Lektor</option>
							<option value='tłumacz'>Tłumacz</option>
							<option value='it'>IT</option>
							<option value='inne'>Inne</option>
						</select>
					</div>
					<div className='career__offer-array-list-container'>
						{filteredJobs.length === 0 ? (
							<p className='career__offer-array-error-message'>Brak ogłoszeń spełniających kryteria..</p>
						) : (
							<ul className='career__offer-array-list'>
								{filteredJobs.map(job => (
									<li className='career__offer-array-list-item' key={job.id}>
										<h3>{job.title}</h3>
										<p>{job.description}</p>
										<Link className='career__offer-array-item-btn' to='/'>
											Zobacz
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CareerOfferArray;
