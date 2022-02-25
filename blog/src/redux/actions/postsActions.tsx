import { ACTIONS } from "../constants";

export const addPosts = (posts: any) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
  };
};
