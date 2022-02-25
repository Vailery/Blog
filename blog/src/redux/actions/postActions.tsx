import { ACTIONS } from "../constants";
import { IPostState } from "../reducers/postReducer";

export const addPost = (post: IPostState) => {
  return {
    type: ACTIONS.ADD_POST,
    post: post,
  };
};
