import { ACTIONS } from "../constants";

export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  title: string;
}

export interface IPostState {
  post: IPost;
}

const defaultState: IPostState = {
  post: {
    id: 0,
    image: "",
    text: "",
    date: "",
    title: "",
  },
};

export const postReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.ADD_POST: {
      return { ...state, post: action.post };
    }

    default:
      return state;
  }
};
