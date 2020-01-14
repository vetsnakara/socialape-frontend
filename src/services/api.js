import HttpService from "./http";

// const API_ROOT = process.env.REACT_APP_API_ROOT || "http://localhost:3000";
const API_ROOT = "/"; // proxy is userd

const http = new HttpService({ baseURL: API_ROOT });

const api = {
  // auth
  login: async user => http.post("/login", user),
  signup: async user => http.post("/signup", user),

  // user
  getUserData: async () => http.get("/user"),

  // post
  getPosts: async () => http.get("/post")
};

export default api;
