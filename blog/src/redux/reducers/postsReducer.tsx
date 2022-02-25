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
  post: IPost;
}

const defaultState: IPostsState = {
  offset: 0,
  posts: [],
  post: {
    id: 0,
    image: "",
    text: "",
    date: "",
    title: "",
  },
};

export const postsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_POSTS: {
      return { ...state, posts: [...state.posts, ...action.posts] };
    }

    case ACTIONS.ADD_POST: {
      return { ...state, post: action.post };
    }

    case ACTIONS.CLEAR_POST: {
      return { ...state, post: defaultState.post };
    }

    case ACTIONS.ADD_OFFSET: {
      return { ...state, offset: action.offset };
    }
    default:
      return state;
  }
};
