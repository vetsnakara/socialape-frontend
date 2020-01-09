import HttpService from "./http";

const http = new HttpService();

const api = {
  getPosts: async () => http.get("/post")
};

export default api;
