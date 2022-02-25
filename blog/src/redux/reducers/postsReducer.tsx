import { ACTIONS } from "../constants";

export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  title: string;
}

export interface IPostsState {
  offset: number;
  posts: IPost[];
}

const defaultState: IPostsState = {
  offset: 0,
  posts: [],
};

export const postsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_POSTS: {
      return { ...state, posts: [...state.posts, ...action.posts] };
    }
    case ACTIONS.ADD_OFFSET: {
      return { ...state, offset: action.offset };
    }
    default:
      return state;
  }
};
