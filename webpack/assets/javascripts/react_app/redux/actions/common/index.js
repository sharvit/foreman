import API from '../../../API';

export const ajaxRequestAction = ({
  dispatch,
  requestAction,
  successAction,
  failedAction,
  url,
  item,
  headers = {},
  params = {},
}) => {
  dispatch({ type: requestAction, payload: item });
  return API.get(url, headers, params)
    .then(({ data }) => dispatch({ type: successAction, payload: { ...item, ...data } }))
    .catch(error => dispatch({ type: failedAction, payload: { error, item } }));
};
