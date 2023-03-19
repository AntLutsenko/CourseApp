import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCourse } from '../../store/getCourses/actions';

const CourseLesson = () => {
	const { course } = useSelector((state) => state.courses);

	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCourse(id));
	}, [id]);

	return (
		<>
			{' '}
			{course ? (
				<>
					<h2>dfsdfsdf</h2>
					<h2>Course: {course.data.title}</h2>
					<h2> {course.data.description}</h2>
					<img
						className='course__img'
						src={`${course.data.previewImageLink + '/cover.webp'}`}
						alt='lesson'
					/>
					{course.data.lessons?.map((lesson, id) => {
						return (
							<div key={id}>
								<h2>{lesson.order}</h2>
								<h2>{lesson.title}</h2>
								<video controls>
									<source src={lesson.link} type='application/x-mpegURL' />
								</video>
							</div>
						);
					})}
				</>
			) : null}
		</>
	);
};

export default CourseLesson;
