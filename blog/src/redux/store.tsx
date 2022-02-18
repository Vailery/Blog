import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IPostState, postsReducer } from "./reducers/postsReducer";

export interface IState {
  postsReducer: IPostState;
}

export const store = createStore(
  combineReducers({ postsReducer }),
  composeWithDevTools()
);
