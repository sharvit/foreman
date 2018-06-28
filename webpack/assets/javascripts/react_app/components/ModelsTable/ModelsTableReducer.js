import Immutable from 'seamless-immutable';
import {
  HW_MODEL_TABLE_REQUEST,
  HW_MODEL_TABLE_SUCCESS,
  HW_MODEL_TABLE_FAILURE,
} from './ModelsTableConsts';
import { STATUS } from '../../constants';

const initState = Immutable({
  page: '1',
  perPage: '20',
  sortBy: '',
  sortOrder: '',
  results: [],
  error: null,
  status: STATUS.PENDING,
  searchQuery: null,
});
export default (state = initState, action) => {
  switch (action.type) {
    case HW_MODEL_TABLE_REQUEST:
      return state.set('status', STATUS.PENDING);
    case HW_MODEL_TABLE_SUCCESS:
      return Immutable.merge(state, {
        status: STATUS.RESOLVED,
        error: null,
        searchQuery: action.payload.search,
        results: action.payload.results,
        page: action.payload.page,
        perPage: action.payload.per_page,
        sortBy: action.payload.sort.by,
        sortOrder: action.payload.sort.order,
      });
    case HW_MODEL_TABLE_FAILURE:
      return state
        .set('status', STATUS.ERROR)
        .set('error', action.payload.error);
    default:
      return state;
  }
};
