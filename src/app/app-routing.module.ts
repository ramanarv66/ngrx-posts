import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UpdateCourseComponent } from './components/course/update-course/update-course.component';

const routes: Routes = [
  { path: 'edit/:id', component: UpdateCourseComponent },
  { path: 'add', component: AddCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
