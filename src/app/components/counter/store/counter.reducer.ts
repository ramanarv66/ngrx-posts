import { createReducer, on } from "@ngrx/store";
import { incrementCounterAction } from "./counter.action";
import { initialState } from "./counter.state";

export const counterReducer = createReducer(initialState, on(
    incrementCounterAction, (state) => {
        return {
                ...state,
                count: state.count + 1
                
        }
    }
))