import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import bookmarks from './bookmarks';
import statistics from './statistics';
import hosts from './hosts';
import notifications from './notifications/';
import factChart from './factCharts/';
import { reducers as toastNotificationsReducers } from '../../components/ToastNotifications';
import { reducers as passwordStrengthReducers } from '../../components/PasswordStrength';
import { reducers as breadcrumbBarReducers } from '../../components/BreadcrumbBar';

export function combineReducersAsync(asyncReducers) {
  return combineReducers({
    bookmarks,
    form,
    statistics,
    hosts,
    notifications,
    factChart,
    ...toastNotificationsReducers,
    ...passwordStrengthReducers,
    ...breadcrumbBarReducers,
    ...asyncReducers,
  });
}

export default combineReducersAsync();
