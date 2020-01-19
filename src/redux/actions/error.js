export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const clearError = feature => {
  return {
    type: `${feature.toUpperCase()}_${CLEAR_ERROR}`
  };
};

export const setError = (feature, error) => ({
  type: `${feature.toUpperCase()}_${SET_ERROR}`,
  payload: { error }
});
