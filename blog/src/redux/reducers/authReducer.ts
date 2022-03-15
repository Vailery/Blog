import { ACTIONS } from "../constants";

export interface IAuthState {
  error: any;
  email: string;
  username: string;
  id: number;
  isLoggedIn: boolean;
}

const defaultState: IAuthState = {
  error: null,
  email: "",
  username: "",
  id: 0,
  isLoggedIn: false,
};

export const authReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.REGISTRATION_FAILURE: {
      return { ...state, error: action.error };
    }

    case ACTIONS.REGISTRATION_SUCCESS: {
      return {
        ...state,
        error: null,
        username: action.username,
        email: action.email,
        id: action.id,
      };
    }

    case ACTIONS.LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        username: action.username,
        email: action.email,
        id: action.id,
        isLoggedIn: true,
      };
    }

    default:
      return state;
  }
};
