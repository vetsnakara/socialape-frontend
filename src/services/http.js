import axios from "axios";

const TIMEOUT = 20000;

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

class HttpService {
  constructor({ baseURL, timeout = TIMEOUT, headers = HEADERS } = {}) {
    this.client = axios.create({ baseURL, timeout, headers });
    this.client.interceptors.response.use(this.handleSuccess, this.handleError);

    // this.client.defaults.proxy.host = "http://localhost:5000";
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client
      .get(path, {
        proxy: {
          host: "http://localhost:5000"
        }
      })
      .then(response => response.data);
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

  setRequestHeader(headerName, headerValue) {
    this.client.defaults.headers.common[headerName] = headerValue;
  }

  removeRequestHeader(header) {
    delete this.client.defaults.headers.common[header];
  }
}

export default HttpService;
