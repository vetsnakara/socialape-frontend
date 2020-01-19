export const HTTP_ERROR = "HTTP_ERROR";

export const httpError = (feature, error) => {
  return {
    type: HTTP_ERROR,
    payload: {
      feature,
      error
    }
  };
};
