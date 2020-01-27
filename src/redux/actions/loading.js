// scope name
const scope = "loading";

// action types
export const SET_LOADING = `[${scope}] SET_LOADING`;
export const CLEAR_LOADING = `[${scope}] CLEAR_LOADING`;

// action creators
export const setLoading = actionType => ({
  type: SET_LOADING,
  payload: {
    actionType
  }
});

export const clearLoading = actionType => ({
  type: CLEAR_LOADING,
  payload: {
    actionType
  }
});
