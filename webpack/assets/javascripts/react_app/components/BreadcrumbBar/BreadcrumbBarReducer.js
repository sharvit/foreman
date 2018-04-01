import Immutable from 'seamless-immutable';

import {
  BREADCRUMB_BAR_TOGGLE_SWITCHER,
  BREADCRUMB_BAR_RESOURCES_REQUEST,
  BREADCRUMB_BAR_RESOURCES_SUCCESS,
  BREADCRUMB_BAR_RESOURCES_FAILURE,
} from './BreadcrumbBarConstants';

const initialState = Immutable({
  resourceSwitcherItems: [],
  isLoading: false,
  isSwitcherOpen: false,
  requestError: null,
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case BREADCRUMB_BAR_RESOURCES_REQUEST:
      return state
        .set('resourceSwitcherItems', [])
        .set('requestError', null)
        .set('isLoading', true);

    case BREADCRUMB_BAR_RESOURCES_SUCCESS:
      return state
        .set('resourceSwitcherItems', payload)
        .set('requestError', null)
        .set('isLoading', false);

    case BREADCRUMB_BAR_RESOURCES_FAILURE:
      return state
        .set('resourceSwitcherItems', [])
        .set('requestError', payload)
        .set('isLoading', false);

    case BREADCRUMB_BAR_TOGGLE_SWITCHER:
      return state.set('isSwitcherOpen', !state.isSwitcherOpen);

    default:
      return state;
  }
};
