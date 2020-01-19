export const parseAction = (action, types) => {
  const actions = types.join("|");

  const matches = new RegExp(`(.*)_(${actions})`).exec(action);

  if (matches) {
    const [, feature, type] = matches;
    return { feature, type };
  }

  return null;
};

const withActionParse = (reducer, types) => {
  return (state, action) => {
    const matches = parseAction(action.type, types);

    if (matches) {
      const { type, payload, ...rest } = action;

      const newAction = {
        type: matches.type,
        payload: {
          ...payload,
          feature: matches.feature.toLocaleLowerCase()
        },
        ...rest
      };

      return reducer(state, newAction);
    }

    return reducer(state, action);
  };
};

export default withActionParse;
