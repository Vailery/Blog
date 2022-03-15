import { Dispatch } from "redux";
import { getPosts, LIMIT } from "../../services/posts";
import { ACTIONS } from "../constants";
import { IPost } from "../reducers/postsReducer";
import { IState } from "../store";

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
      const result = await getPosts(0);

      dispatch(addPosts(result.results, result.count));
    }
  };
};

export const fetchMorePosts = () => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
      postsReducer: { offset, posts },
    } = getState();

    const result = await getPosts(offset + 5);

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
