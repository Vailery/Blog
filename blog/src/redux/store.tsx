import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { IPostsState, postsReducer } from "./reducers/postsReducer";
import { IAuthState, authReducer } from "./reducers/authReducer";

export interface IState {
  postsReducer: IPostsState;
  authReducer: IAuthState;
}

export const store = createStore(
  combineReducers({ postsReducer, authReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
