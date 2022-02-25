import { ACTIONS } from "../constants";

export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  title: string;
}

export interface IPostsState {
  posts: IPost[];
}

const defaultState: IPostsState = {
  posts: [],
};

export const postsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_POSTS: {
      return { ...state, posts: action.posts };
    }

    default:
      return state;
  }
};
