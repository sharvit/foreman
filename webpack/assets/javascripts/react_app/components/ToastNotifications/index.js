import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './ToastNotificationsActions';
import reducer from './ToastNotificationsReducer';
import { selectToastNotificationsMessagesList } from './ToastNotificationsSelectors';

import ToastNotifications from './ToastNotifications';

// map state to props
const mapStateToProps = state => ({
  messages: selectToastNotificationsMessagesList(state),
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { toastNotifications: reducer };

// export connected component
export default connect(mapStateToProps, mapDispatchToProps)(ToastNotifications);
