import { useState } from 'react';
import { jobOffersData } from '../data/jobOfferData';
import { JobCategory } from '../models/career.model';

export const useCareerOfferFilter = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<JobCategory | 'all'>('all');

	const filteredJobs = jobOffersData.filter(job => {
		const matchesSearch =
			job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			job.description.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;

		return matchesSearch && matchesCategory;
	});

	return { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, filteredJobs };
};
