import { counterReducer } from "./components/counter/store/counter.reducer";
import { courseReducer } from "./components/course/store/course.reducer";
import { courseState } from "./components/course/store/course.state";
import { postReducer } from "./components/posts/store/posts.reducer";

export interface AppState {

    courseReducer: courseState,
}

export const AppReducer = {

    courseReducer: courseReducer,
    cReducer: counterReducer, pReducer: postReducer
}