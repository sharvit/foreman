import Immutable from 'seamless-immutable';
import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAILURE,
  AUTO_COMPLETE_RESET,
} from './AutoCompleteConstants';

const initialState = Immutable({
  controller: null,
  error: null,
  results: [],
  searchQuery: '',
  status: null,
  trigger: null,
  queryCache: {},
});

export default (state = initialState, action) => {
  const {
    payload: {
      controller, error, results, searchQuery, status, trigger, queryCache,
    } = {}, type,
  } = action;
  switch (type) {
    case AUTO_COMPLETE_REQUEST:
      return state.merge({
        controller,
        error: null,
        searchQuery,
        status,
        trigger,
      });
    case AUTO_COMPLETE_SUCCESS:
      return state.merge({
        error: null,
        results,
        status,
        searchQuery,
        queryCache,
        controller,
        trigger,
      });
    case AUTO_COMPLETE_FAILURE:
      return state.merge({
        error,
        results,
        status,
      });
    case AUTO_COMPLETE_RESET:
      return state.merge({
        ...initialState,
        queryCache: state.queryCache,
      });
    default:
      return state;
  }
};
