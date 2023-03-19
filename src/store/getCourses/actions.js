import { getCourses, getCourse } from '../../api/api';

const setCourses = (courses) => {
	return { type: 'LOADED_ALL_COURSES', payload: courses };
};
const setCourse = (course) => {
	return { type: 'LOADED_COURSE', payload: course };
};

export const errorLoadedCourses = () => ({
	type: 'ERROR_LOADED_COURSES',
});

export const fetchCourses = () => async (dispatch) => {
	dispatch({ type: 'START_FETCH_COURSES' });

	try {
		const data = await getCourses();
		dispatch(setCourses(data));
	} catch (error) {
		dispatch(errorLoadedCourses());
	}
};

export const fetchCourse = (id) => async (dispatch) => {
	try {
		const data = await getCourse(id);
		console.log(data);
		dispatch(setCourse(data));
	} catch (error) {
		console.log(error);
		dispatch(errorLoadedCourses());
	}
};

export const setCurrentPage = (page) => ({
	type: 'SET_CURRENT_PAGE',
	payload: page,
});
