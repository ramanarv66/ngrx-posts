import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCounterAction, incrementCounterActionInput } from './store/counter.action';
import { Counter, initialState } from "./store/counter.state";
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  inputValue: number = 0;
  val: number = 0
  constructor(private store: Store<{ cReducer: Counter }>) { }

  ngOnInit(): void {
    this.store.select('cReducer').subscribe((data) => {
      console.log(data)
      this.val = data.count? data.count:-1;
    })
  }
  increment() {
    //this.store.dispatch(incrementCounterAction())
    this.store.dispatch(incrementCounterActionInput({input: this.inputValue}))
  }


}
