export const HTTP_ERROR = "HTTP_ERROR";

export const httpError = error => {
  return {
    type: HTTP_ERROR,
    payload: {
      error
    }
  };
};
