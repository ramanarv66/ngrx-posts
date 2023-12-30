import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { course } from './store/course.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  url: string = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}

  addCourse(course: course): Observable<course> {
    let couse_ = course;
    let obj = {
        id: Number(course.courseid),
        description: course.description,
        teacher: course.teacher,
        coursenName: course.coursenName,
        courseid:course.courseid
    }
    return this.http.post<course>(this.url, obj);
  }

  getCourses(): Observable<course[]> {
    return this.http.get<course[]>(this.url);
  }
}
