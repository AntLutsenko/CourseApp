import React from 'react';
import { useSelector } from 'react-redux';
import Course from '../components/Course/Course';

const Courses = () => {
	const { currentPage, itemOnPage, courses } = useSelector(
		(state) => state.courses
	);

	const startIndex = (currentPage - 1) * itemOnPage;
	const endIndex = startIndex + itemOnPage;
	const visibleCourses = courses.slice(startIndex, endIndex);

	const courseList = visibleCourses.map((course) => (
		<Course key={course.id} {...course} />
	));

	return <section className='courses-list'> {courseList} </section>;
};

export default Courses;
