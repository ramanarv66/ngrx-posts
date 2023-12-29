import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { course, courseState } from './store/course.state';
import { AppState } from '../../app.state';
import { Router } from '@angular/router';
import { getCoursesSelector } from './store/course.selector';
import { deleteCourseAction } from './store/course.action';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  // constructor(private store: Store<AppState>) { }
  constructor(private store: Store<AppState>, private router: Router) {}
  courses: course[] = [];

  ngOnInit(): void {
    this.store.select('courseReducer').subscribe((data) => {
      this.courses = data.courses;
    });
  }

  edit(id: string) {
    this.router.navigate(['edit', id]);
  }
  add() {
    this.router.navigate(['add']);
  }

  delete(id: string) {
    this.store.dispatch(deleteCourseAction({ courseid: id }));

    // this.store.select(getCoursesSelector).subscribe((data) => {
    //   this.courses = data;
    //   this.courses.map((each) => {
    //     return (each.courseid = id);
    //   });
    //   console.log(this.courses);
    // });
  }
}
