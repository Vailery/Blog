import { Dispatch } from "redux";
import { ACTIONS } from "../constants";
import { IPost } from "../reducers/postsReducer";

export const addPosts = (posts: IPost[]) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
  };
};

export const addPost = (post: IPost) => {
  return {
    type: ACTIONS.ADD_POST,
    post: post,
  };
};

export const clearPost = () => {
  return {
    type: ACTIONS.CLEAR_POST,
  };
};

export const addOffset = (offset: number) => {
  return {
    type: ACTIONS.ADD_OFFSET,
    offset: offset,
  };
};

export const fetchPosts = (LIMIT: number, offset: number) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    );
    const result = await response.json();
    dispatch(addPosts(result.results));
  };
};

export const fetchPost = (id: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + id
    );
    const result = await response.json();
    dispatch(addPost(result));
  };
};
