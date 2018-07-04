import API from '../../../API';
import { testActionSnapshotWithFixtures } from '../../../common/testHelpers';
import {
  getResults,
  resetData,
  initialUpdate,
} from '../AutoCompleteActions';
import { error, searchQuery, controller, queryCache, queryCacheWithSavedQuery, url, trigger, APISuccessMock } from '../AutoComplete.fixtures';

jest.mock('../../../API');


const loadResults = (requestParams, serverMock) => {
  API.get.mockImplementation(serverMock);

  return getResults(...requestParams);
};

const fixtures = {
  'should update store with initial data': () => initialUpdate('searchQuery', controller, queryCache),

  'should load results and success': () =>
    loadResults([url, searchQuery, controller, trigger, queryCache], async () => APISuccessMock),

  'should load results and fail': () =>
    loadResults(['xyz', searchQuery, controller, trigger, queryCache], async () => { throw new Error(error); }),

  'should reset-data': () => resetData(controller),

  'should detect used query and avoid extra API call':
    () => getResults(url, searchQuery, controller, trigger, queryCacheWithSavedQuery),
};

describe('AutoComplete actions', () => testActionSnapshotWithFixtures(fixtures));
