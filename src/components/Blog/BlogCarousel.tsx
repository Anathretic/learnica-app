import { useState } from 'react';
import { Slide } from './components/Slide';
import { SliderControl } from './components/SliderControl';
import { SliderModel } from '../../models/blogCarousel.model';

export const BlogCarousel: React.FC<SliderModel> = ({ slides }) => {
	const [current, setCurrent] = useState(0);

	const handlePreviousClick = () => {
		const previous = current - 1;
		setCurrent(previous < 0 ? slides.length - 1 : previous);
	};

	const handleNextClick = () => {
		const next = current + 1;
		setCurrent(next === slides.length ? 0 : next);
	};

	const handleSlideClick = (id: number) => {
		if (current !== id) {
			setCurrent(id);
		}
	};

	const wrapperTransform = {
		transform: `translateX(-${(current * 100) / slides.length}%)`,
	};

	return (
		<div className='slider'>
			<ul className='slider__wrapper' style={wrapperTransform}>
				{slides.map(slide => (
					<Slide key={slide.node.id} slide={slide.node} current={current} handleSlideClick={handleSlideClick} />
				))}
			</ul>
			<div className='slider__controls'>
				<SliderControl type='previous' title='Poprzedni slajd' handleClick={handlePreviousClick} />
				<SliderControl type='next' title='Następny slajd' handleClick={handleNextClick} />
			</div>
		</div>
	);
};
