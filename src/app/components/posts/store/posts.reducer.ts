import { createReducer, on } from "@ngrx/store";
import { Posts, initialStatePost } from "./posts.state";
import { create } from "domain";
import { addPostInput, getAllPostsAction } from "./posts.action";

export const postReducer = createReducer(initialStatePost, on(
    getAllPostsAction, (state) => {
        return {
            ...state,
            id: state.id ? Number(state.id) + 1 : 0,
            title: state.title + '' + state.id,
            body: state.body + '' + state.id

        }
    }
), on(
    addPostInput, (state, action) => {
        return {
            ...state,
            title: action.eachPost.title,
            body: action.eachPost.body,
            id: state.id ? state.id + 1 : -1

        }
    }
))