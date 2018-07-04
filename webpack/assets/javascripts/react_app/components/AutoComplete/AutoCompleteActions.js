import API from '../../API';
import { STATUS } from '../../constants';
import { urlBuilder } from './helpers';
import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAILURE,
  AUTO_COMPLETE_RESET,
  TRIGGERS,
} from './AutoCompleteConstants';

export const getResults =
(path, searchQuery, controller, trigger, queryCache) => (dispatch) => {
  const url = urlBuilder(path, searchQuery, trigger);

  // to avoid an extra API call, find if this search query was already used.
  const usedQueryResults = queryCache[controller] && queryCache[controller][searchQuery];
  if (usedQueryResults !== undefined) {
    return dispatch({
      type: AUTO_COMPLETE_SUCCESS,
      payload: {
        controller,
        queryCache,
        results: usedQueryResults,
        searchQuery,
        status: STATUS.RESOLVED,
        trigger,
      },
    });
  }

  const addQueryToCache = results =>
    queryCache.setIn([controller], { ...queryCache[controller], [searchQuery]: results });

  // Starting a request
  dispatch({
    type: AUTO_COMPLETE_REQUEST,
    payload: {
      controller,
      searchQuery,
      status: STATUS.PENDING,
      trigger,
    },
  });

  // Making an API call
  return API.get(url)
    .then(({ data }) => dispatch({
      type: AUTO_COMPLETE_SUCCESS,
      payload: {
        controller,
        queryCache: addQueryToCache(data),
        results: data,
        searchQuery,
        status: STATUS.RESOLVED,
        trigger,
      },
    }))
    .catch(error => dispatch({
      type: AUTO_COMPLETE_FAILURE,
      payload: {
        error,
        queryCache: addQueryToCache([]),
        status: STATUS.ERROR,
      },
    }));
};

export const resetData = controller => (dispatch) => {
  dispatch({
    type: AUTO_COMPLETE_RESET,
    payload: { controller },
  });
};

export const initialUpdate = (searchQuery, controller, queryCache) => (dispatch) => {
  const updatedQueryCache = { ...queryCache, [controller]: { ...queryCache[controller] } };
  dispatch({
    type: AUTO_COMPLETE_SUCCESS,
    payload: {
      searchQuery,
      controller,
      queryCache: updatedQueryCache,
      trigger: TRIGGERS.COMPONENT_DID_MOUNT,
      status: STATUS.RESOLVED,
      results: [],
    },
  });
};
