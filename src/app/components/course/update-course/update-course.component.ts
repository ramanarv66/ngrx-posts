import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { course } from '../store/course.state';
import { getCoursesSelector } from '../store/course.selector';
import { updateCourseAction, updateCourseActionWithEffect } from '../store/course.action';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css',
})
export class UpdateCourseComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}
  coursesList: course[] = [];
  // tempCourse?: course;
  //  tep: course ={
  //   courseid: '1',
  //   coursenName: 'Introduction to Java Programming',
  //   teacher: 'John Smith',
  //   description: 'A comprehensive introduction to Java programming language.',
  // }
  // test: course = {
  //   courseid: '1',
  //   coursenName: 'Introduction to Java Programming',
  //   teacher: 'John Smith',
  //   description: 'A comprehensive introduction to Java programming language.',
  // };
 

  courseForm: FormGroup = new FormGroup({
    courseid: new FormControl(''),
    coursenName: new FormControl(''),
    teacher: new FormControl(''),
    description: new FormControl(''),
  });
  
  tempCourse?:course;
  onUpdateCourse() {
    this.update()
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      console.log(data.get('id'));
      let id = data.get('id');
      this.store.select(getCoursesSelector).subscribe((courses: course[]) => {
        this.coursesList = courses;
         this.tempCourse = this.coursesList.find((a) => a.courseid == id);
        console.log(this.tempCourse);
        this.createForm();
       
      });
    });
  }

  createForm() {
    this.courseForm = new FormGroup({
      courseid: new FormControl(this.tempCourse?.courseid),
      coursenName: new FormControl(this.tempCourse?.coursenName),
      teacher: new FormControl(this.tempCourse?.teacher),
      description: new FormControl(this.tempCourse?.description),
      
    });

  }

  update() {
    this.store.dispatch(updateCourseActionWithEffect({ updateCourse: this.courseForm.value}));
  }
}
