import { SET_ERRORS, FETCH_START } from "../types/ui";

// Sync Actions
export const doSetErrors = error => ({ type: SET_ERRORS, error });
export const doFetchStart = () => ({ type: FETCH_START });
