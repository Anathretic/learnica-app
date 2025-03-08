import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
	getInitialBlogPopupSliceValue,
	setSlideItemData,
	setPopupVisible,
} from '../../redux/blogPopupReduxSlice/blogPopupSlice';
import { blogPopupActivityToggle } from '../../utils/blogPopupActivityToggleUtils';

const BlogPopup: React.FC = () => {
	const { showPopup, slideItemData } = useAppSelector(getInitialBlogPopupSliceValue);
	const dispatch = useAppDispatch();

	const handleCloseBtn = () => {
		dispatch(setPopupVisible(false));
		blogPopupActivityToggle();
		dispatch(setSlideItemData(undefined));
	};

	return (
		<>
			{showPopup ? (
				<div className='blog-popup'>
					<div className='blog-popup__container'>
						{slideItemData && (
							<>
								<h4 className='blog-popup__title'>{slideItemData.main_title}</h4>
								<p className='blog-popup__public-date'>Opublikowano: {slideItemData.public_date}</p>
								<div className='blog-popup__content-container'>
									{slideItemData.sections.map((el, id) => (
										<div key={id} className='blog-popup__content-box'>
											<h4 className='blog-popup__content-title'>{el.title}</h4>
											<p className='blog-popup__content-text'>{el.content}</p>
										</div>
									))}
									<button type='button' className='blog-popup__close-btn' onClick={handleCloseBtn}>
										Zamknij
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default BlogPopup;
