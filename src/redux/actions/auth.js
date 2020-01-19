import api from "../../services/api";

export const UNAUTH_SET_DATA = "UNAUTH_SET_DATA";

export const unauthUser = () => dispatch => {
  api.http.removeRequestHeader("Authorization");
  localStorage.removeItem("token");
  dispatch({ type: UNAUTH_SET_DATA });
};
