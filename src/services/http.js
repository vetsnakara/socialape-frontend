import axios from "axios";

const TIMEOUT = 20000;

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

class HttpService {
  constructor({ baseURL, timeout = TIMEOUT, headers = HEADERS } = {}) {
    this.client = axios.create({ baseURL, timeout, headers });

    this.client.interceptors.response.use(
      this.successInterceptor,
      this.errorInterceptor
    );
  }

  successInterceptor(response) {
    return response;
  }

  errorInterceptor(error) {
    const errorHandlers = {
      requestReceived: ({ response }) => {
        if (response.status === 400) {
          return {
            type: "validation",
            ...response.data
          };
        } else if (response.status === 403) {
          return {
            type: "general",
            message: response.data.error
          };
        } else if (response.status === 404) {
          return {
            type: "general",
            message: response.data.message
          };
        }

        // todo: Internal Server Error (500) hadnling
      },

      responseNotReceived: error => {
        return {
          type: "network",
          message: error.code
        };
      },

      setupRequestFailed: error => error
    };

    const handledError = handleError(error, errorHandlers);

    console.log(handledError);

    return Promise.reject(handledError);
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

  setRequestHeader(headerName, headerValue) {
    this.client.defaults.headers.common[headerName] = headerValue;
  }

  removeRequestHeader(header) {
    delete this.client.defaults.headers.common[header];
  }
}

export const handleError = (error, errorHandlers) => {
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    return errorHandlers.requestReceived(error);
  } else if (error.request) {
    /*
     * The request was made but no response was received
     *   - no connection with internet
     *   - server dont't responses
     */
    return errorHandlers.requestNotReceived(error);
  } else {
    /*
     * Something happened in setting up the request and triggered an Error
     */
    return errorHandlers.setupRequestFailed(error);
  }
};

export default HttpService;
