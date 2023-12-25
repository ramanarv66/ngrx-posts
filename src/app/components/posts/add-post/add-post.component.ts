import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllPostsAction } from '../store/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {}
