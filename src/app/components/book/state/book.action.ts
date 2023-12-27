import { createAction, props } from "@ngrx/store";
import { Book } from "./book.state";

export const getBooksAction = createAction('[get books] books action');
export const getBooksActionSuccess = createAction('[get books success] books action');
export const addBookAction = createAction('[add book] book action', props<{addBook: Book}>())