import { createAction } from "@ngrx/store";

export const GET_POSTS = '[GET ALL POSTS]'
export const GET_POSTS_SUCCESS = '[GET ALL POSTS SUCCESS]'
export const getAllPostsAction = createAction(GET_POSTS);
export const getAllPostsActionSuccess = createAction(GET_POSTS_SUCCESS);