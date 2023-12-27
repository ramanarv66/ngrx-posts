import { createReducer, on } from "@ngrx/store";
import { create } from "domain";
import { addPostInput, getAllPostsAction } from "./posts.action";
import { initialState } from "./posts.state";


export const postReducer =createReducer(initialState, on(
    addPostInput, (state, action) => {
        let post_ = action.eachPost;
       // post_.id =  Math.floor(Math.random()*10)
        return {
            ...state,
            postList: [...state.postList, post_]
            
        }
    }
))