import {
  HW_MODEL_TABLE_REQUEST,
  HW_MODEL_TABLE_SUCCESS,
  HW_MODEL_TABLE_FAILURE,
} from './ModelsTableConsts';
import { getTableItems } from './ModelsTableActions';
import { ajaxRequestAction } from '../../redux/actions/common';

jest.mock('../../redux/actions/common');
describe('ModelsTableActions', () => {
  it('sortTable should call ajaxRequestAction with url ', () => {
    const url = 'url';
    const dispatch = jest.fn();
    const expectedParams = {
      dispatch,
      failedAction: HW_MODEL_TABLE_FAILURE,
      requestAction: HW_MODEL_TABLE_REQUEST,
      successAction: HW_MODEL_TABLE_SUCCESS,
      url,
      params: {},
      item: { controller: 'models', url },
    };
    const dispatcher = getTableItems(url, {}, 'models');

    dispatcher(dispatch);
    expect(ajaxRequestAction).toBeCalledWith(expectedParams);
  });
});
