import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from './state/book.state';
import { addBookAction } from './state/book.action';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  subject: string ='';
  pages: number =0;
  id: number =0;
  author: string = '';
  constructor(private store: Store<{bReducer: Book}>){

  }

  ngOnInit(): void {
      this.store.select('bReducer').subscribe((data)=>{
        console.log(data)
      })
  }
  add(){
  let b:Book = {
    id: this.id, subject: this.subject, pages: this.pages, author: this.author
  }
  this.store.dispatch(addBookAction({addBook: b}))
  }

}
