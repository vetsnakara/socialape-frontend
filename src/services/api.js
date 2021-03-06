import HttpService from "./http";

const API_ROOT = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_ROOT : "/";

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
  create: async body => http.post("/post", { body }),
  delete: async postId => http.delete(`/post/${postId}`),

  // likes
  like: async postId => http.post(`/like/create/${postId}`),
  unlike: async postId => http.delete(`/like/delete/${postId}`),

  // httpService
  http
};

export default api;
