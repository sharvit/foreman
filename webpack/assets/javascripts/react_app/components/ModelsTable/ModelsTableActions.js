import {
  HW_MODEL_TABLE_REQUEST,
  HW_MODEL_TABLE_SUCCESS,
  HW_MODEL_TABLE_FAILURE,
} from './ModelsTableConsts';
import { ajaxRequestAction } from '../../redux/actions/common';

export const getTableItems = (url, params, controller) => dispatch =>
  ajaxRequestAction({
    dispatch,
    requestAction: HW_MODEL_TABLE_REQUEST,
    successAction: HW_MODEL_TABLE_SUCCESS,
    failedAction: HW_MODEL_TABLE_FAILURE,
    url,
    params,
    item: { controller, url },
  });
