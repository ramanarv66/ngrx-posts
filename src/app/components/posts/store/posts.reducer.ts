import { createReducer, on } from "@ngrx/store";
import { Posts, initialStatePost } from "./posts.state";
import { create } from "domain";
import { getAllPostsAction } from "./posts.action";

export const postReducer = createReducer(initialStatePost, on(
    getAllPostsAction, (state)=>{
        return {
            ...state,
            id: state.id?Number(state.id)+1:0 ,
            title: state.title + '' + state.id,
            body: state.body + '' + state.id
          

            
        }
    }
))