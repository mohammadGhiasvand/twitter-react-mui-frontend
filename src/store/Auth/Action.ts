/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import {
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from "./ActionType";

export const loginUser =
  (loginData: object) => async (dispatch: (a: object) => void) => {
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/signin`,
        loginData
      );

      console.log("Loggedin user", data);

      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
      }

      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt });
    } catch (error: any) {
      console.log(
        "The following error occurred during user login action: " + error
      );
      dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
    }
  };

export const registerUser =
  (registerData: object) => async (dispatch: (a: object) => void) => {
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        registerData
      );

      console.log("Signed up user", data);

      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
      }

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.jwt });
    } catch (error: any) {
      console.log(
        "The following error occurred during user login action: " + error
      );
      dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
    }
  };

export const logoutUser = () => async (dispatch: (a: object) => void) => {
  localStorage.removeItem("jwt");

  dispatch({ type: LOGOUT, payload: null });
};

export const getUserProfile =
  (jwtToke: string) => async (dispatch: (a: object) => void) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${jwtToke}`,
        },
      });

      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
    } catch (error: any) {
      console.log(
        "The following error occurred during user login action: " + error
      );
      dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message });
    }
  };
