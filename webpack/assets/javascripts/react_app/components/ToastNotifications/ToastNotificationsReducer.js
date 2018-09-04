import Immutable from 'seamless-immutable';
import { TOASTS_ADD, TOASTS_DELETE, TOASTS_CLEAR } from './ToastNotificationsConstants';

const initialState = Immutable({
  messages: {},
});

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOASTS_ADD:
      return state.setIn(['messages', payload.key], payload.message);

    case TOASTS_DELETE:
      return state.set('messages', state.messages.without(payload.key));

    case TOASTS_CLEAR:
      return initialState;

    default:
      return state;
  }
};
