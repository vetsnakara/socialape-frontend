const createApiActions = actionType => ({
  apiRequest: (thunk, data) => ({
    type: `${actionType} (pending)`,
    payload: { thunk, data },
    meta: { actionType }
  }),

  apiSuccess: successAction => ({
    type: `${actionType} (success)`,
    payload: { successAction },
    meta: { actionType }
  }),

  apiError: errorAction => ({
    type: `${actionType} (error)`,
    payload: { errorAction },
    meta: { actionType }
  })
});

export default createApiActions;
