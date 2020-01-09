import axios from "axios";

const API_ROOT = process.env.REACT_APP_API_ROOT || "http://localhost:3000";

const TIMEOUT = 20000;

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

class HttpService {
  constructor({
    baseURL = API_ROOT,
    timeout = TIMEOUT,
    headers = HEADERS
  } = {}) {
    this.client = axios.create({ baseURL, timeout, headers });
    this.client.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(response => response.data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then(response => response.data);
  }

  put(path, payload) {
    return this.client.put(path, payload).then(response => response.data);
  }

  patch(path, payload) {
    return this.client.patch(path, payload).then(response => response.data);
  }

  delete(path) {
    return this.client.delete(path).then(response => response.data);
  }
}

export default HttpService;
