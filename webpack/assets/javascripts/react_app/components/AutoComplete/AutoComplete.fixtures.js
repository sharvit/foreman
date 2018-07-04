import Immutable from 'seamless-immutable';
import { STATUS } from '../../constants';
import { TRIGGERS } from './AutoCompleteConstants';

export const url = 'models/auto_complete_search?search=';
export const status = null;
export const controller = 'models';
export const searchQuery = '';
export const initialQuery = '';
export const queryCache = Immutable({});
export const trigger = TRIGGERS.INPUT_CHANGE;
export const error = 'oops';
export const results = [{ label: 'some results', category: 'category' }];
export const APISuccessMock = { data: results };
export const queryCacheWithSavedQuery = Immutable({ [controller]: { [searchQuery]: results } });

export const AutoCompleteProps = {
  controller,
  searchQuery,
  initialQuery,
  status,
  results,
  url,
};

export const initialState = {
  controller: null,
  error: null,
  results: [],
  searchQuery: '',
  status: null,
  trigger: null,
  queryCache: {},
};

export const usedQuery = {
  url,
  searchQuery,
  controller,
  trigger,
  status: STATUS.RESOLVED,
  results: queryCacheWithSavedQuery[controller][searchQuery],
  queryCache: queryCacheWithSavedQuery,
};

export const initialValues = {
  searchQuery,
  controller,
  queryCache: { [controller]: {} },
  trigger: TRIGGERS.COMPONENT_DID_MOUNT,
  results,
  status: STATUS.RESOLVED,
};

export const request = {
  controller,
  error: null,
  searchQuery,
  status: STATUS.PENDING,
  trigger,
};

export const success = {
  error: null,
  results,
  status: STATUS.RESOLVED,
  queryCache,
  searchQuery,
  controller,
  trigger,
};

export const failure = {
  controller,
  error,
  results: [],
  status: STATUS.ERROR,
  queryCache,
  trigger,
};
