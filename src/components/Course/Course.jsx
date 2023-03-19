import React from 'react';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
	const {
		description,
		previewImageLink,
		title,
		lessonsCount,
		meta,
		rating,
		launchDate,
		id,
	} = props;

	const skils = meta.skills?.map((skill, index) => {
		return (
			<li className='course__main--skills-item' key={index}>
				{skill}
			</li>
		);
	});

	return (
		<article className='course'>
			<header className='course__header'>
				<img
					className='course__img'
					src={previewImageLink + '/cover.webp'}
					alt='course foto'
				/>

				<h1 className='course__header--title'>{title}</h1>
			</header>
			<main className='course__main'>
				<div>
					<span>🚀 {new Date(launchDate).toLocaleDateString()}</span>
				</div>

				<h2 className='course__main--description'>{description}</h2>
				<p className='course__main--lesson-count'>
					Кількість уроків: {lessonsCount}
				</p>
				<ul className='course__main--skills-list'>
					<span>Навички:</span>
					{skils}
				</ul>
				<p className='course__main--raiting'>Рейтинг: {rating}</p>
			</main>
			<footer>
				<NavLink to={'/lesson/' + id}>📖 &nbsp;Почати навчання →</NavLink>
			</footer>
		</article>
	);
};

export default Course;
