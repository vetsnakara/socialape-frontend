// scope name
const scope = "ui";

// action types
export const MODAL_OPEN = `[${scope}] MODAL_OPEN`;
export const MODAL_CLOSE = `[${scope}] MODAL_CLOSE`;

// action creators
export const openModal = feature => ({
  type: MODAL_OPEN,
  payload: { feature }
});

export const closeModal = feature => ({
  type: MODAL_CLOSE,
  payload: { feature }
});
