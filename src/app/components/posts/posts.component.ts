import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllPostsAction } from './store/posts.action';
import { Posts } from './store/posts.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  constructor(private store: Store<{
    pReducer: {
      id: 0,
      title: 'test',
      body: 'ram'
    }
  }>) { }

  ngOnInit(): void {
    this.store.select('pReducer').subscribe((data) => {
      console.log(data)
    })
  }
  show() {
    this.store.dispatch(getAllPostsAction())
  }
}
