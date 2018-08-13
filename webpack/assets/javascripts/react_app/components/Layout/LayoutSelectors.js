import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';
import { changeActive, navigateTo } from '../../../foreman_navigation';
import { getCurrentPath } from './LayoutHelper';

export const selectLayout = state => state.layout;

export const selectMenuItems = state => selectLayout(state).items;
export const selectActiveMenu = state => selectLayout(state).activeMenu;
export const selectCurrentLocation = state => selectLayout(state).currentLocation;
export const selectCurrentOrganization = state => selectLayout(state).currentOrganization;
const path = getCurrentPath();

export const patternflyMenuItemsSelector = createSelector(
  selectMenuItems,
  selectActiveMenu,
  selectCurrentLocation,
  selectCurrentOrganization,
  (items, activeMenu, currentLocation, currentOrganization) =>
    patternflyItems(items, path, activeMenu, currentLocation, currentOrganization),
);

const patternflyItems = (data, activePath, activeMenu, currentLocation, currentOrganization) => {
  const items = [];
  if (isEmpty(data)) return [];

  data.forEach((item) => {
    let activeFlag = false;
    const childrenArray = [];
    item.children.forEach((child) => {
      if (isEmpty(activeMenu) && child.url === activePath) { // activeMenu after Full page reload
        activeFlag = true;
        changeActive(item.name);
      }

      const childObject = {
        title: isEmpty(child.name) ? child.name : __(child.name),
        isDivider: child.type === 'divider' && !isEmpty(child.name),
        className: (child.name === currentLocation || child.name === currentOrganization) ? 'mobile-active' : '',
        onClick: child.onClick ? () => child.onClick() : () => navigateTo(child.url),
      };
      childrenArray.push(childObject);
    });
    const itemObject = {
      title: __(item.name),
      initialActive: activeFlag || item.active,
      iconClass: item.icon,
      subItems: childrenArray,
      className: (mobileView.indexOf(item.name) > -1) ? 'visible-xs-block' : '',
    };
    items.push(itemObject);
  });
  return items;
};

const mobileView = ['User', 'Organizations', 'Locations'];
