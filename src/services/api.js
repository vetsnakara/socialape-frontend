import HttpService from "./http";

// const API_ROOT = process.env.REACT_APP_API_ROOT || "http://localhost:3000";
const API_ROOT = "/"; // proxy is userd

const http = new HttpService({ baseURL: API_ROOT });

const api = {
  getPosts: async () => http.get("/post"),
  login: async user => http.post("/login", user),
  signup: async user => http.post("/signup", user)
};

export default api;
