import api from "../../../services/api";

export const setUserToken = token => {
  const tokenWithBearer = `Bearer ${token}`;
  api.http.setRequestHeader("Authorization", tokenWithBearer);
  localStorage.setItem("token", tokenWithBearer);
};

export const unsetUserToken = () => {
  api.http.removeRequestHeader("Authorization");
  localStorage.removeItem("token");
};
