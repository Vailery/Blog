import { Dispatch } from "redux";
import { ACTIONS } from "../constants";
import { IState } from "../store";

interface IRegistrationData {
  username: string;
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

export const registration = ({
  username,
  email,
  password,
}: IRegistrationData) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    try {
      const response = await fetch(
        `https://studapi.teachmeskills.by/auth/users/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw result;
      }

      if (response.ok) {
        dispatch(registrationSuccess(result));
      }
    } catch (error: any) {
      dispatch(registrationFailure(error));
    }
  };
};
