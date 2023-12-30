import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseService } from '../course-service';
import { addCourseAction, addCourseSuccessAction, getCourseAction, getCourseActionSuccess } from './course.action';
import { map, mergeMap } from 'rxjs';
import { course } from './course.state';

@Injectable({
  providedIn: 'root',
})
export class CourseEffect {
  constructor(private action$: Actions, private courseService: CourseService) { }
  // addCourse$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(action),
  //         mergeMap(() => {
  //             /*this.myService.pipe(
  //                 map(data => data)
  //                 catchError(() => EMPTY)
  //             */
  //         })
  //     )
  // );

  getCourses$ = createEffect(
    ():any => {
      return this.action$.pipe(ofType(getCourseAction),
      mergeMap((action)=>{
        return this.courseService.getCourses().pipe(map((data: course[])=>{
          return getCourseActionSuccess({courses: data});
        }))
      }
      )
      )
     }, {}
  )

  addCourse$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(addCourseAction),
      mergeMap((action) => {
        return this.courseService.addCourse(action.addCourse).pipe(
          map((data: course) => {
            console.log(data);
            return addCourseSuccessAction({ addCourse: data });
          })
        );
      })
    );
  });
}