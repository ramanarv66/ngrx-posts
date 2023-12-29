import { createFeatureSelector, createSelector } from '@ngrx/store';
import { course, courseState } from './course.state';

export const getCourseState =
  createFeatureSelector<courseState>('courseReducer');
export const getCoursesSelector = createSelector(getCourseState, (state: courseState) => {
    return state.courses;
});


