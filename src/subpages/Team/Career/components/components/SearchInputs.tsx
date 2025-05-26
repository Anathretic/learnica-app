import { JobCategory, SearchInputModel, SearchSelectModel } from '../../../../../models/career.model';

export const SearchInput: React.FC<SearchInputModel> = ({ searchTerm, setSearchTerm }) => {
	return (
		<input
			className='career__offer-array-search-input'
			type='text'
			placeholder='Szukaj..'
			value={searchTerm}
			onChange={e => setSearchTerm(e.target.value)}
		/>
	);
};

export const SearchSelect: React.FC<SearchSelectModel> = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<select
			className='career__offer-array-search-select'
			value={selectedCategory}
			onChange={e => setSelectedCategory(e.target.value as JobCategory | 'all')}>
			<option value='all'>Wszystkie</option>
			<option value='lektor'>Lektor</option>
			<option value='tłumacz'>Tłumacz</option>
			<option value='it'>IT</option>
			<option value='inne'>Inne</option>
		</select>
	);
};
