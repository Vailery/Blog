import { Dispatch } from "redux";
import { ACTIONS } from "../constants";
import { IPost } from "../reducers/postsReducer";
import { IState } from "../store";

const LIMIT = 5;

export const addPosts = (posts: IPost[], count: number, offset: number = 0) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
    count,
    offset,
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

export const fetchPosts = () => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
      postsReducer: { offset },
    } = getState();

    if (offset === 0) {
      const response = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${0}`
      );
      const result = await response.json();

      dispatch(addPosts(result.results, result.count));
    }
  };
};

export const fetchMorePosts = () => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
      postsReducer: { offset, posts },
    } = getState();

    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${
        offset + LIMIT
      }`
    );

    const result = await response.json();

    dispatch(
      addPosts([...posts, ...result.results], result.count, offset + LIMIT)
    );
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

export const fetchSearchPosts = (search: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=100&search=${search}`
    );
    const result = await response.json();
    dispatch(addPosts(result.results, result.count));
  };
};
