import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './LayoutActions';
import reducer from './LayoutReducer';
import { selectLayout, patternflyMenuItemsSelector } from './LayoutSelectors';

import Layout from './Layout';

// map state to props
const mapStateToProps = state => ({
  items: patternflyMenuItemsSelector(state),
  isLoading: selectLayout(state).isLoading,
  activeMenu: selectLayout(state).activeMenu,
  currentOrganization: selectLayout(state).currentOrganization,
  currentLocation: selectLayout(state).currentLocation,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { layout: reducer };

// export connected component
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
