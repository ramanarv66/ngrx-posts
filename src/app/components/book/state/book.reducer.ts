import { createReducer, on } from "@ngrx/store";
import { initialState } from "./book.state";
import { addBookAction, getBooksAction } from "./book.action";

export const booksReducer = createReducer(initialState, on(
    getBooksAction, (state, action) => {
        return {
            ...state
        }
    }
),

    // on(addBookAction, (state, {addBook})=>{

    //     return [addBook];
    // })

    on(addBookAction, (state, { addBook }) => {

        let newState = [...state];
        newState.push(addBook)

        return newState
    })

)