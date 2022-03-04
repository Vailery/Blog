import { ACTIONS } from "../constants";

export interface IAuthState {
  error: any;
  email: string;
  username: string;
  id: number;
}

const defaultState: IAuthState = {
  error: null,
  email: "",
  username: "",
  id: 0,
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
    default:
      return state;
  }
};
