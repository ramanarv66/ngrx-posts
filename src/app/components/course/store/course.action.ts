import { createAction, props } from '@ngrx/store';
import { course } from './course.state';

export const getCourseAction = createAction(
  '[getCourseAction] in course action'
);
export const updateCourseAction = createAction(
  '[updateCourseAction] in course action',
  props<{ updatedCourse: course }>()
);
export const deleteCourseAction = createAction(
  '[deleteCourseAction] in course action',
  props<{ courseid: string }>()
);
export const addCourseAction = createAction(
  '[addCourseAction] in course action',
  props<{ addCourse: course }>()
);
