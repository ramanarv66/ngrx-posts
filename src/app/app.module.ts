import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer } from './app.state';
import { CounterComponent } from './components/counter/counter.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { CourseComponent } from './components/course/course.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UpdateCourseComponent } from './components/course/update-course/update-course.component';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffect } from './components/course/store/course.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddPostComponent,
    DeletePostComponent,
    EditPostComponent,
    CounterComponent,
    CourseComponent,
    AddCourseComponent,
    UpdateCourseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([CourseEffect]),
    // StoreModule.forRoot({cReducer: counterReducer, pReducer: postReducer, bReducer: booksReducer, courseReducer: getCourseReducer})
    StoreModule.forRoot(AppReducer)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
