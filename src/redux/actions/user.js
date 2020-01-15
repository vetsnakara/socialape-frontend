// todo: use constant for token name in LS
import jwtDecode from "jwt-decode";

import api from "../../services/api";
import { doFetchStart, doSetErrors } from "./ui";

import {
  SET_USER_AUTHENTICATED,
  SET_USER_UNAUTHENTICATED
} from "../types/user";

// Sync Actions
const doSetUserAuthenticated = userDetails => ({
  type: SET_USER_AUTHENTICATED,
  userDetails
});

const doSetUserUnauthenticated = () => ({
  type: SET_USER_UNAUTHENTICATED
});

export const doLogoutUser = dispatch => {
  api.http.removeRequestHeader("Authorization");
  localStorage.removeItem("token");
  dispatch(doSetUserUnauthenticated());
};

// Async Actions
const doAuthUserWithToken = token => async dispatch => {
  try {
    api.http.setRequestHeader("Authorization", token);
    const userDetails = await api.getAuthUserDetails();
    dispatch(doSetUserAuthenticated(userDetails));
  } catch (error) {
    // todo: handle errors here
    console.log("doAuthUserWithToken", error);
    doSetErrors(error);
  }
};

export const doLoginUserWithToken = async dispatch => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token.split("Bearer ")[1]);

        const timeToExp = decodedToken.exp * 1000 - Date.now();
        if (timeToExp < 0) {
          return localStorage.removeItem("token");
        }
      } catch (error) {
        return localStorage.removeItem("token");
      }

      dispatch(doFetchStart());
      await dispatch(doAuthUserWithToken(token));
    }
  } catch (error) {
    // todo: handle errors here
    console.log(error);
    doSetErrors(error);
  }
};

export const doLoginUser = (userData, history) => async dispatch => {
  try {
    dispatch(doFetchStart());

    const { token } = await api.login(userData);

    const tokenWithBearer = `Bearer ${token}`;

    await dispatch(doAuthUserWithToken(tokenWithBearer));

    localStorage.setItem("token", tokenWithBearer);
    history.push("/");
  } catch (error) {
    const { request, response } = error;
    if (response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      if (response.status === 400) {
        dispatch(
          doSetErrors({
            type: "validation",
            ...response.data
          })
        );
      } else if (error.response.status === 403) {
        dispatch(
          doSetErrors({
            type: "general",
            message: response.data.error
          })
        );
      }
      // todo: Internal Server Error (500) hadnling
    } else if (request) {
      /*
       * The request was made but no response was received
       *   - no connection with internet
       *   - server dont't responses
       *
       */
      dispatch(
        doSetErrors({
          type: "network",
          message: error.code
        })
      );
    } else {
      // Something happened in setting up the request and triggered an Error
      dispatch(doSetErrors(error));
    }
  }
};

export const doSignupUser = (userData, history) => async dispatch => {
  try {
    dispatch(doFetchStart());

    const { token } = await api.signup(userData);

    const tokenWithBearer = `Bearer ${token}`;

    await dispatch(doAuthUserWithToken(tokenWithBearer));

    localStorage.setItem("token", tokenWithBearer);
    history.push("/");
  } catch (error) {
    const { request, response } = error;
    if (response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      if (response.status === 400) {
        dispatch(
          doSetErrors({
            type: "validation",
            ...response.data
          })
        );
      } else if (error.response.status === 403) {
        dispatch(
          doSetErrors({
            type: "general",
            message: response.data.error
          })
        );
      }
      // todo: Internal Server Error (500) hadnling
    } else if (request) {
      /*
       * The request was made but no response was received
       *   - no connection with internet
       *   - server dont't responses
       *
       */
      dispatch(
        doSetErrors({
          type: "network",
          message: error.code
        })
      );
    } else {
      // Something happened in setting up the request and triggered an Error
      dispatch(doSetErrors(error));
    }
  }
};
