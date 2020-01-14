import { doLoadingUi } from "./ui";
import { SET_USER } from "../types";

import api from "../../services/api";

// Sync Actions
const doSetUser = user => {
  return {
    type: SET_USER,
    user
  };
};

// Async Actions
export const loginUser = userData => async dispatch => {
  dispatch(doLoadingUi());

  try {
    const { token } = await api.login(user);

    // Success 🎉
    setAuthUser(token);

    setUser(initialState);
    setError(null);
    setLoading(false);

    // redirect
    history.push("/");
  } catch (error) {
    // Error 😨
    const { request, response } = error;

    if (response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      if (response.status === 400) {
        setError({
          type: "validation",
          ...response.data
        });
      } else if (error.response.status === 403) {
        setError({
          type: "general",
          message: response.data.error
        });
      }
      // todo: Internal Server Error (500) hadnling
    } else if (request) {
      /*
       * The request was made but no response was received
       *   - no connection with internet
       *   - server dont't responses
       *
       */
      console.log("no response case");
      console.log("error.toJSON()", error.toJSON());
      console.log("error.request", error.request);
      console.log("error.response", error.response);
      setError({
        type: "network",
        message: error.code
      });

      // https://github.com/axios/axios/issues/383#issuecomment-234079506
      // if (!error.status) {
      //   // network error
      // }
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("else case");
      // console.log("error.toJSON()", error.toJSON());
      console.log("error.request", error.request);
      console.log("error.response", error.response);
      console.log("error.message", error.message);
      setError(error);
    }

    setLoading(false);
  }
};

export const getUserData = () => async dispatch => {
  try {
    const user = await api.getUserData();
    dispatch(doSetUser(user));
  } catch (error) {}
};
