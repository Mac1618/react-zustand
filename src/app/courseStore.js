// Zustand Imports
import create from 'zustand';

import { devtools, persist } from 'zustand/middleware';

// store global state
const courseStore = (set) => ({
	// variable that store the courses
	courses: [],

	// Adding course
	addCourse: (course) => {
		// 'state' gives the latest varibale in 'courses'
		set((state) => ({
			// Logic: Adding the new state to the existing state
			// new state  // existing state
			courses: [course, ...state.courses],
		}));
	},

	// Removing course
	removeCourse: (courseId) => {
		// 'state' gives the latest varibale in 'courses'
		set((state) => ({
			// Logic: retain all the courses that is not equal to courseId
			// 'c' is each element in 'courses'     // target courseId
			courses: state.courses.filter((c) => c.id !== courseId),
		}));
	},

	// Updating course
	updatingCourse: (courseId) => {
		// 'state' gives the latest variable in 'courses'
		set((state) => ({
			// Logic: select courses by id and if 'courseId' is present
			// - update the name of the course
			// - else do nothing
			// 'c' is each element in 'courses'
			courses: state.courses.map((c) =>
				// For each course find the 'c.id' that has the value of 'courseId'
				c.id === courseId
					? // Spread each 'c' element, and update the name of the course that contains the courseId
					  { ...c, name: 'Updated' }
					: // return 'c' or original courses state
					  c
			),
		}));
	},

	// Getting all courses
	getAllCourses: () => {
		//'state' gives the latest varibale in 'courses'
		set((state) => ({
			// Logic: return all the courses
			courses: state.courses,
		}));
	},

	// Toggle the course Status
	toggleCourseStatus: (courseId) => {
		//'state' gives the latest variable in 'courses'
		set((state) => ({
			// Logic: select courses by id and if 'courseId' is present change the 'complete' state in opposite boolean
			courses: state.courses.filter((c) =>
				// Find the 'c.id' that has the value of 'courseId'
				c.id === courseId
					? // change the value of 'complete; to the opposite state
					  { ...c, completed: !c.completed }
					: // return 'c' or original courses state
					  c
			),
		}));
	},
});

// The storing data happens here:
const useCourseStore = create(
	devtools(
		persist(
			// the store is being created based on 'courseStore'
			courseStore,
			// Name in the local storage
			{ name: 'courses' }
		)
	)
);

export default useCourseStore;
