import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/counter/store/counter.reducer';
import { postReducer } from './components/posts/store/posts.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddPostComponent,
    DeletePostComponent,
    EditPostComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({cReducer: counterReducer, pReducer: postReducer})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
