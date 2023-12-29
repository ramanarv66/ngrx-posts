import { createReducer, on } from '@ngrx/store';
import { course, courseState, initialState } from './course.state';
import {
  addCourseAction,
  deleteCourseAction,
  getCourseAction,
  updateCourseAction,
} from './course.action';

// export const getCourseReducer = createReducer(
//   initialState,
//   on(getCourseAction, (state) => {
//     return {
//       ...state,
//     };
//   })
// );

export const _courseReducer = createReducer(
  initialState,
  on(updateCourseAction, (state: any, action) => {
    let course_ = action.updatedCourse;
    let updatedCourses = state.courses.map((eachCourse: course) => {
      return eachCourse.courseid == course_.courseid ? course_ : eachCourse;
    });
    return {
      ...state,
      courses: updatedCourses,
    };
  }),
  on(deleteCourseAction, (state: any, action) => {
    let deleteId = action.courseid;
    let courses_ = state.courses.filter((eachCourseId: course) => {
      return eachCourseId.courseid != deleteId;
    });
    return {
      ...state,
      courses: courses_,
    };
  }),
  on(addCourseAction, (state, action) => {
    return {
      ...state,
      courses: [...state.courses, action.addCourse],
    };
  })
);

export function courseReducer(state: any, action: any) {
  return _courseReducer(state, action);
}
