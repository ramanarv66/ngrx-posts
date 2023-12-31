import { createReducer, on } from '@ngrx/store';
import { course, courseState, initialState } from './course.state';
import {
  addCourseAction,
  addCourseSuccessAction,
  deleteCourseAction,
  deleteWithEffectActionSuccess,
  getCourseAction,
  getCourseActionSuccess,
  updateCourseAction,
  updateCourseActionSuccessWithEffect,
} from './course.action';

// export const getCourseReducer = createReducer(
//   initialState,
//   on(getCourseAction, (state) => {
//     return {
//       ...state,
//     };
//   })
// );

// export const _courseReducer = createReducer(
//   initialState,
//   on(updateCourseAction, (state: any, action) => {
//     let course_ = action.updatedCourse;
//     let updatedCourses = state.courses.map((eachCourse: course) => {
//       return eachCourse.courseid == course_.courseid ? course_ : eachCourse;
//     });
//     return {
//       ...state,
//       courses: updatedCourses,
//     };
//   }),
//   on(deleteCourseAction, (state: any, action) => {
//     let deleteId = action.courseid;
//     let courses_ = state.courses.filter((eachCourseId: course) => {
//       return eachCourseId.courseid != deleteId;
//     });
//     return {
//       ...state,
//       courses: courses_,
//     };
//   }),
//   on(addCourseAction, (state, action) => {
//     return {
//       ...state,
//       courses: [...state.courses, action.addCourse],
//     };
//   })
// );

export const _courseReducer = createReducer(
  initialState,
  // on(
  //   addCourseSuccessAction, (state, action) => {
  //     return {
  //       ...state,
  //       courses: [...state.courses, action.addCourse]
  //     }
  //   }
  // ),
  on(
    getCourseActionSuccess, (state, action) => {
      let tmpCourse: course[] = action.courses
      return {
        ...state,
        courses: tmpCourse
      }
    }
  ),
  on(

    addCourseSuccessAction, (state, action: any) => {
      return {
        ...state,
        courses: [...state.courses, action.addCourse]
      }
    }

  ),
  on(updateCourseActionSuccessWithEffect, (state, action) => {
    let updatedCourse = action.courses;

    let tempCourses = state.courses.map((a) => {
      return (a.id == Number(updatedCourse.courseid) || a.id == Number(updatedCourse.courseid)) ? action.courses : a
    })
    return {
      ...state,
      courses: tempCourses
    }
  }),
  on(deleteWithEffectActionSuccess, (state: courseState, action) => {
    let del = action.id;
    let freshCouresesAfterDelete = state.courses.filter((eachCourse) => {
      return eachCourse.id != Number(action.id)
    })
    return {
      ...state,
      courses: freshCouresesAfterDelete
    }
  })
  // on(addCourseAction, (state, action) => {
  //   return {
  //     ...state,
  //     courses: [...state.courses, action.addCourse],
  //   };
  // })
);

export function courseReducer(state: any, action: any) {
  return _courseReducer(state, action);
}
