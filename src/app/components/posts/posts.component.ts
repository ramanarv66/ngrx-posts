import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addPostInput, getAllPostsAction } from './store/posts.action';
import { Posts } from './store/posts.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  title: string='';
  body: string=''
  constructor(private store: Store<{
    pReducer: Posts
  }>) { }

  ngOnInit(): void {
    // this.store.select('pReducer').subscribe((data) => {
    //   console.log(data)
    // })
    this.store.select('pReducer').subscribe((data)=>{
      console.log(data)

    })
  }
  show() {
    this.store.dispatch(getAllPostsAction())
  }
  addProduct(){
    let post = new Posts();
    post.body = this.body;
    post.title = this.title;
    this.store.dispatch(addPostInput({eachPost: post}))
  }
}
