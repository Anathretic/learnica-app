import { useCareerOfferFilter } from '../../../../hooks/useCareerOfferFilter';
import { SearchInput, SearchSelect } from './components/SearchInputs';
import { CareerOfferListItem } from './components/CareerOfferListItem';

const CareerOfferArray: React.FC = () => {
	const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, filteredJobs } = useCareerOfferFilter();

	return (
		<section className='career__offer-array'>
			<div className='career__offer-array-container'>
				<h2 className='career__offer-array-title'>Oferty pracy</h2>
				<div className='career__offer-array-element'>
					<div className='career__offer-array-filter-elements'>
						<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
						<SearchSelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
					</div>
					<div className='career__offer-array-list-container'>
						{filteredJobs.length === 0 ? (
							<p className='career__offer-array-error-message'>Brak ogłoszeń spełniających kryteria..</p>
						) : (
							<ul className='career__offer-array-list'>
								{filteredJobs.map(job => (
									<CareerOfferListItem key={job.id} href={job.href} title={job.title} description={job.description} />
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
