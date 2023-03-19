import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../store/getCourses/actions';

const Paginations = () => {
	const { currentPage, itemOnPage, courses } = useSelector(
		(state) => state.courses
	);
	const dispatch = useDispatch();

	const totalPages = Math.ceil(courses.length / itemOnPage);
	return (
		<>
			<div className='pages'>
				{Array.from({ length: totalPages }).map((_, i) => (
					<span
						key={i + 1}
						onClick={() => dispatch(setCurrentPage(i + 1))}
						disabled={i + 1 === currentPage}
						className={i + 1 === currentPage ? 'current-page' : 'page'}
					>
						{i + 1}
					</span>
				))}
			</div>
		</>
	);
};

export default Paginations;
