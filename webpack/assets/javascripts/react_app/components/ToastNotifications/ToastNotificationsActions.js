import uuidV1 from 'uuid/v1';

import { TOASTS_ADD, TOASTS_DELETE, TOASTS_CLEAR } from './ToastNotificationsConstants';

export const addToast = (toast, key = uuidV1()) => ({
  type: TOASTS_ADD,
  payload: {
    key,
    message: { ...toast, key },
  },
});

export const deleteToast = key => ({
  type: TOASTS_DELETE,
  payload: { key },
});

export const clearToasts = () => ({ type: TOASTS_CLEAR });
