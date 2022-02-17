import EventBus from 'eventing-bus';
const HTTP_SUCCESS_CODE_RANGE_START = 200;
const HTTP_SUCCESS_CODE_RANGE_END = 299;

// TODO: Get rid of this
export const eventBusMiddleware = store => next => action => {
  const statusCode =
    action.payload && action.payload.response && action.payload.response.status;
  let result = null;

  /* DEV_NOTE: axios error object throws JS malfunctioned error and app crashes 
  when the response go through the redux createStore method */
  if (
    statusCode < HTTP_SUCCESS_CODE_RANGE_START ||
    statusCode > HTTP_SUCCESS_CODE_RANGE_END
  ) {
    // success response
    result = next({
      type: action.type,
      payload: action.payload && action.payload.message,
    });
  } else {
    result = next(action);
  }

  EventBus.publish(action.type, action.payload);
  return result;
};
