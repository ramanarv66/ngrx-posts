import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { FormControl, FormGroup } from '@angular/forms';
import { addCourseAction } from '../store/course.action';
import { course } from '../store/course.state';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  // addCourseForm" (ngSubmit)="onAddCourse()"

  addCourseForm = new FormGroup({
    courseid: new FormControl(''),
    coursenName: new FormControl(''),
    teacher: new FormControl(''),
    description: new FormControl(''),
  })



  // course: course= {
  //   courseid: '1',
  //   coursenName: "Introduction to Java Programming",
  //   teacher: "John Smith",
  //   description: "A comprehensive introduction to Java programming language."
  // }

  constructor(private store: Store<AppState>){}

  onAddCourse(){
  console.log(this.addCourseForm.value)
 let courseObj: course= {
    courseid: ''+ this.addCourseForm.controls['courseid'].value,
    id: Number( this.addCourseForm.controls['courseid'].value),
    coursenName:''+this.addCourseForm.controls['coursenName'].value,
    teacher:""+ this.addCourseForm.controls['teacher'].value,
    description:""+ this.addCourseForm.controls['description'].value
  }
  this.store.dispatch(addCourseAction({addCourse: courseObj}))
  if(this.addCourseForm.value){

  }
  }

}
