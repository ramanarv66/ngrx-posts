import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCounterAction } from './store/counter.action';
import { initialState } from "./store/counter.state";
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  constructor(private store: Store<{cReducer:{count:0}}>){}

  ngOnInit(): void {
      this.store.select('cReducer').subscribe((data)=>{
        console.log(data)
      })
  }
  increment() {
    this.store.dispatch(incrementCounterAction())
  }


}
