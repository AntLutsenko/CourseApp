import { useEffect } from 'react';
import './App.scss';
import Title from './components/Title/Title';
import { useDispatch } from 'react-redux';
import { fetchCourses } from './store/getCourses/actions';
import Courses from './pages/Courses';
import Paginations from './components/Course/Pagination/Pagination';
import { Routes, Route } from 'react-router-dom';
import CourseLesson from './components/CourseLesson/CourseLesson';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCourses());
	}, []);

	return (
		<>
			<Title />
			<Routes>
				<Route path='/' element={<Courses />} />
				<Route path='/lesson/:id' element={<CourseLesson />} />
			</Routes>
			<Paginations />
		</>
	);
}

export default App;
