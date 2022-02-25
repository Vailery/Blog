import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IPostsState, postsReducer } from "./reducers/postsReducer";
import thunk from "redux-thunk";
import { IPostState, postReducer } from "./reducers/postReducer";

export interface IState {
  postsReducer: IPostsState;
  postReducer: IPostState;
}

export const store = createStore(
  combineReducers({ postsReducer, postReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
