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
  post: IPost;
  count: number;
  offset: number;
}

const defaultState: IPostsState = {
  posts: [],
  post: {
    id: 0,
    image: "",
    text: "",
    date: "",
    title: "",
  },
  count: 0,
  offset: 0,
};

export const postsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_POSTS: {
      return {
        ...state,
        posts: action.posts,
        count: action.count,
        offset: action.offset,
      };
    }

    case ACTIONS.ADD_POST: {
      return { ...state, post: action.post };
    }

    case ACTIONS.CLEAR_POST: {
      return { ...state, post: defaultState.post };
    }

    default:
      return state;
  }
};
