import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const GET_POSTS = '[GET ALL POSTS]'
export const GET_POSTS_SUCCESS = '[GET ALL POSTS SUCCESS]'
export const getAllPostsAction = createAction(GET_POSTS);
export const getAllPostsActionSuccess = createAction(GET_POSTS_SUCCESS);
export const addPostInput = createAction('addPostInputAction', props<{eachPost: Post}>())