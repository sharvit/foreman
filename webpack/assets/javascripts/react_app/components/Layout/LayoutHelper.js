import {
  changeOrganization,
  changeLocation,
  navigateTo,
} from '../../../foreman_navigation';

export const getCurrentPath = () => window.location.pathname;

export const combineMenuItems = (data) => {
  const items = [];

  data.menu.forEach((item) => {
    items.push(item);
  });

  if (data.taxonomies.organizations) {
    items.push(createOrgItem(data.organizations.available_organizations));
  }

  if (data.taxonomies.locations) {
    items.push(createLocationItem(data.locations.available_locations));
  }
  return items;
};

const createOrgItem = (orgs) => {
  const anyOrg = {
    name: 'Any Organization',
    onClick: () => {
      changeOrganization('Any Organization');
      navigateTo('/organizations/clear');
    },
  };
  const childrenArray = [];
  childrenArray.push(anyOrg);

  orgs.forEach((org) => {
    const childObject = {
      type: org.type,
      name: org.title,
      onClick: () => {
        navigateTo(org.href);
        changeOrganization(org.title);
      },
      url: org.href,
    };
    childrenArray.push(childObject);
  });

  const orgItem = {
    type: 'sub_menu',
    name: 'Organizations',
    icon: 'fa fa-building',
    children: childrenArray,
    className: 'visible-xs-block',
    active: false,
  };
  return orgItem;
};

const createLocationItem = (locations) => {
  const anyLoc = {
    name: 'Any Location',
    onClick: () => {
      changeLocation('Any Location');
      navigateTo('/locations/clear');
    },
  };
  const childrenArray = [];
  childrenArray.push(anyLoc);

  locations.forEach((loc) => {
    const childObject = {
      type: loc.type,
      name: loc.title,
      onClick: () => {
        navigateTo(loc.href);
        changeLocation(loc.title);
      },
      url: loc.href,
    };
    childrenArray.push(childObject);
  });

  const locItem = {
    type: 'sub_menu',
    name: 'Locations',
    icon: 'fa fa-globe',
    children: childrenArray,
    className: 'visible-xs-block',
    active: false,
  };
  return locItem;
};
