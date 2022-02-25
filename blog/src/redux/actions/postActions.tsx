import { Dispatch } from "redux";
import { ACTIONS } from "../constants";
import { IPost } from "../reducers/postReducer";

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

export const fetchPost = (id: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + id
    );
    const result = await response.json();
    dispatch(addPost(result));
  };
};
