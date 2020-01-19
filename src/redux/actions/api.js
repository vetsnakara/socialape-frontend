export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export const apiRequest = (feature, thunk, args) => {
  return {
    type: API_REQUEST,
    payload: { feature, thunk, args }
  };
};

export const apiSuccess = (feature, data) => ({
  type: API_SUCCESS,
  payload: { feature, data }
});

export const apiError = (feature, error) => ({
  type: API_ERROR,
  payload: { feature, error }
});
