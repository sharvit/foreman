import API from '../../API';

import {
  BREADCRUMB_BAR_TOGGLE_SWITCHER,
  BREADCRUMB_BAR_CLOSE_SWITCHER,
  BREADCRUMB_BAR_RESOURCES_REQUEST,
  BREADCRUMB_BAR_RESOURCES_SUCCESS,
  BREADCRUMB_BAR_RESOURCES_FAILURE,
} from './BreadcrumbBarConstants';

export const toggleSwitcher = () => ({
  type: BREADCRUMB_BAR_TOGGLE_SWITCHER,
});

export const closeSwitcher = () => ({
  type: BREADCRUMB_BAR_CLOSE_SWITCHER,
});

export const loadSwitcherResourcesByResource = (resource, options = {}) => (dispatch) => {
  const {
    reosurceUrl, nameField, switcherItemUrl,
  } = resource;
  // const { query = '', perPage = 10, page = 1 } = options;

  const beforeRequest = () =>
    dispatch({
      type: BREADCRUMB_BAR_RESOURCES_REQUEST,
      payload: { resource, options },
    });

  const onRequestSuccess = response =>
    dispatch({ type: BREADCRUMB_BAR_RESOURCES_SUCCESS, payload: formatResults(response) });

  const onRequestFail = error =>
    dispatch({ type: BREADCRUMB_BAR_RESOURCES_FAILURE, payload: error });

  const formatResults = ({ data }) =>
    data.results.map(({ id, [nameField]: name }) =>
      ({ name, url: switcherItemUrl.replace(':id', id) }));

  beforeRequest();

  return API.get(reosurceUrl, {}, { per_page: 1000 }).then(onRequestSuccess, onRequestFail);
};
