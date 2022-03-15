import { Dispatch } from "redux";
import { getProfile, loginUser, registerUser } from "../../services/auth";
import { ACTIONS } from "../constants";
interface IRegistrationData {
  username: string;
  email: string;
  password: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IProfile {
  email: string;
  username: string;
  id: number;
}

const registrationFailure = (error: any) => {
  return {
    type: ACTIONS.REGISTRATION_FAILURE,
    error: error,
  };
};

const registrationSuccess = (profile: IProfile) => {
  return {
    type: ACTIONS.REGISTRATION_SUCCESS,
    ...profile,
  };
};

const loginSuccess = (profile: IProfile) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    ...profile,
  };
};

export const registration = ({
  username,
  email,
  password,
}: IRegistrationData) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await registerUser(username, email, password);

      dispatch(registrationSuccess(result));
    } catch (error: any) {
      dispatch(registrationFailure(error));
    }
  };
};

export const login = ({ email, password }: ILoginData) => {
  return async (dispatch: Dispatch) => {
    try {
      const { access, refresh } = await loginUser(email, password);

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      const profile = await getProfile();

      dispatch(loginSuccess(profile));
    } catch (error: any) {
      dispatch(registrationFailure(error));
    }
  };
};

export const init = () => {
  return async (dispatch: Dispatch) => {
    try {
      const access = localStorage.getItem("access");

      if (access) {
        const profile = await getProfile();

        if (profile) {
          dispatch(loginSuccess(profile));
        }
      }
    } catch (error: any) {}
  };
};
