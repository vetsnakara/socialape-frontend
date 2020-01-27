// scope name
const scope = "auth";

// action types
export const SIGN_IN = `[${scope}] SIGN_IN`;
export const SIGN_UP = `[${scope}] SIGN_UP`;
export const SIGN_OUT = `[${scope}] SIGN_OUT`;
export const SET_USER_AUTH = `[${scope}] SET_USER_AUTH`;
export const SET_USER_UNAUTH = `[${scope}] SET_USER_UNAUTH`;

// action creators
export const signIn = userData => ({
  type: SIGN_IN,
  payload: { userData }
});

export const signUp = userData => ({
  type: SIGN_UP,
  payload: { userData }
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const setUserAuth = () => ({
  type: SET_USER_AUTH
});

export const setUserUnauth = () => ({
  type: SET_USER_UNAUTH
});
