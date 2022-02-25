import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IPostsState, postsReducer } from "./reducers/postsReducer";
import thunk from "redux-thunk";

export interface IState {
  postsReducer: IPostsState;
}

export const store = createStore(
  combineReducers({ postsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
