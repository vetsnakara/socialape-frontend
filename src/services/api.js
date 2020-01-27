import HttpService from "./http";

// const API_ROOT = process.env.REACT_APP_API_ROOT || "http://localhost:3000";
const API_ROOT = "/"; // proxy is userd

const http = new HttpService({ baseURL: API_ROOT });

const api = {
  // auth
  signin: async user => http.post("/login", user),
  signup: async user => http.post("/signup", user),

  // user
  getAuthUserDetails: async () => http.get("/user"),
  setUserDetails: async details => http.post("/user", details),
  uploadImage: async image => http.post("/user/image", image),

  // post
  getPosts: async () => http.get("/post"),

  // httpService
  http
};

export default api;
