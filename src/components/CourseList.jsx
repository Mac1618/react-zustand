import { Fragment } from 'react';

// Courses Store
import useCourseStore from '../app/courseStore';

const CourseList = () => {
	// Destructure Course Store
	const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => ({
		courses: state.courses,
		removeCourse: state.removeCourse,
		toggleCourseStatus: state.toggleCourseStatus,
	}));

	return (
		<>
			<ul>
				{courses.map((course, i) => {
					return (
						<Fragment key={i}>
							<li
								className="course-item"
								style={{
									backgroundColor: course.completed ? '#FF0044' : 'white',
								}}
							>
								<span className="course-item-col-1">
									<input
										checked={course.completed}
										type="checkbox"
										onChange={() => {
											toggleCourseStatus(course.id);
										}}
									/>
								</span>
								<span style={{ color: 'black' }}>{course?.title}</span>
								<button
									className="delete btn"
									onClick={() => {
										removeCourse(course.id);
									}}
								>
									Delete
								</button>
							</li>
						</Fragment>
					);
				})}
			</ul>
		</>
	);
};

export default CourseList;
