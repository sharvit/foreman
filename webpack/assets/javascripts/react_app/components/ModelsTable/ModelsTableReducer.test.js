import {
  HW_MODEL_TABLE_REQUEST,
  HW_MODEL_TABLE_SUCCESS,
  HW_MODEL_TABLE_FAILURE,
} from './ModelsTableConsts';

import { testReducerSnapshotWithFixtures } from '../../common/testHelpers';
import reducer from './ModelsTableReducer';

const fixtures = {
  'should return initial state': {},
  'should handle HW_MODEL_TABLE_REQUEST': {
    action: {
      type: HW_MODEL_TABLE_REQUEST,
    },
  },
  'should handle HW_MODEL_TABLE_SUCCESS': {
    action: {
      type: HW_MODEL_TABLE_SUCCESS,
      payload: {
        search: 'name=model',
        results: [{ id: 23, name: 'model' }],
        page: 1,
        per_page: 5,
        total: 20,
        sort: { by: 'name', order: 'ASC' },
      },
    },
  },
  'should handle HW_MODEL_TABLE_FAILURE': {
    action: {
      type: HW_MODEL_TABLE_FAILURE,
      payload: {
        error: new Error('ooops!'),
      },
    },
  },
};

describe('ModelsTable reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
