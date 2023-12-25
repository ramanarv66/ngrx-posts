import { createReducer, on } from "@ngrx/store";
import { Posts, initialStatePost } from "./posts.state";
import { create } from "domain";
import { getAllPostsAction } from "./posts.action";

export const postReducer = createReducer(initialStatePost, on(
    getAllPostsAction, (state)=>{
        return {
            ...state,
            id: state.id +1,
            body: state.body + 'added' + state.id,
            title: state.title + 'titele' + state.id
          

            
        }
    }
))