import React from 'react';
import PropTypes from 'prop-types';
import { ToastNotificationList, ToastNotification, TimedToastNotification } from 'patternfly-react';
import AlertBody from '../common/Alert/AlertBody';

class ToastNotifications extends React.Component {
  render() {
    const { messages, deleteToast } = this.props;

    const toastsList = messages.map(({
      key, link, message, sticky = false, ...toastProps
    }) => {
      const ToastComponent = sticky ? ToastNotification : TimedToastNotification;

      return (
          <ToastComponent key={key} onDismiss={() => deleteToast(key)} {...toastProps}>
            <AlertBody link={link} message={message} />
          </ToastComponent>
      );
    });

    return <ToastNotificationList>{toastsList}</ToastNotificationList>;
  }
}

ToastNotifications.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    link: PropTypes.string,
    message: PropTypes.node,
    sticky: PropTypes.boolean,
  })).isRequired,
  deleteToast: PropTypes.func.isRequired,
};

export default ToastNotifications;
