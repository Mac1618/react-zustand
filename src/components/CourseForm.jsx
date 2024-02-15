import { useState } from 'react';

// Courses Store
import useCourseStore from '../app/courseStore';

const CourseForm = () => {
	// Adding a course using 'useCourseStore'
	const addCourse = useCourseStore((state) => state.addCourse);

	// Hook to store Title
	const [courseTitle, setCourseTitle] = useState('');

	// console log the data
	console.log('CourseForm Renderd');

	// Handle course on submit
	const handleCourseSubmit = () => {
		// Check if 'courseTitle' has value
		if (!courseTitle) {
			return alert('Please add a course title!');
		}

		// Add the course to the store
		addCourse({
			id: Math.ceil(Math.random() * 1000000), // Creating an Id
			title: courseTitle, // Course title
		});

		// Reset
		alert('Title is successfully added');
		setCourseTitle('');
	};

	return (
		<div className="container">
			<input
				value={courseTitle}
				onChange={(e) => {
					setCourseTitle(e.target.value);
				}}
				type="text"
				className="form-input"
			/>
			<button onClick={() => handleCourseSubmit()} className="form-submit-btn">
				Add Course
			</button>
		</div>
	);
};

export default CourseForm;
