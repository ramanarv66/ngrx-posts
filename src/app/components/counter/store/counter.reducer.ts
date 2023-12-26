import { createReducer, on } from "@ngrx/store";
import { incrementCounterAction, incrementCounterActionInput } from "./counter.action";
import { initialState } from "./counter.state";

export const counterReducer = createReducer(initialState, on(
    incrementCounterAction, (state) => {
        return {
            ...state,
            count: state.count ? state.count + 1 : 0 + 1

        }
    }
),
on(
    incrementCounterActionInput, (state,action)=>{
        return{
            ...state,
            count: state.count? action.input + state.count: 99

        }
    }
)
)