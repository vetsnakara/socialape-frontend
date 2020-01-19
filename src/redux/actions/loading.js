export const REQUEST_START = "REQUEST_START";
export const REQUEST_END = "REQUEST_END";

export const setRequestStart = feature => {
  return {
    type: `${feature.toUpperCase()}_${REQUEST_START}`
  };
};

export const setRequestEnd = feature => ({
  type: `${feature.toUpperCase()}_${REQUEST_END}`
});
