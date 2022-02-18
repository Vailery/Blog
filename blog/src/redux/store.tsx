import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IPostsState, postsReducer } from "./reducers/postsReducer";
import { IPostState, postReducer } from "./reducers/postReducer";

export interface IState {
  postsReducer: IPostsState;
  postReducer: IPostState;
}

export const store = createStore(
  combineReducers({ postsReducer, postReducer }),
  composeWithDevTools()
);
