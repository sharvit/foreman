import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './BreadcrumbBarActions';
import reducer from './BreadcrumbBarReducer';

import BreadcrumbBar from './BreadcrumbBar';

// map state to props
const mapStateToProps = ({ breadcrumbBar }) => ({
  resourceSwitcherItems: breadcrumbBar.resourceSwitcherItems,
  isSwitcherOpen: breadcrumbBar.isSwitcherOpen,
  isLoadingResources: breadcrumbBar.isLoadingResources,
  requestError: breadcrumbBar.requestError,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { breadcrumbBar: reducer };

// export connected component
export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbBar);
