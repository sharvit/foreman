import React from 'react';
import PropTypes from 'prop-types';

import { VerticalNav } from 'patternfly-react';
import { isEmpty } from 'lodash';
import { noop } from '../../common/helpers';

import TaxonomySwitcher from './components/TaxonomySwitcher';
import UserDropdowns from './components/UserDropdowns';
import './layout.scss';

class Layout extends React.Component {
  componentDidMount() {
    const {
      items,
      data,
      fetchMenuItems,
      changeLocation,
      currentLocation,
      changeOrganization,
      currentOrganization,
    } = this.props;
    if (items.length === 0) fetchMenuItems(data);

    if (!isEmpty(data.locations.current_location)
     && currentLocation !== data.locations.current_location) {
      changeLocation(data.locations.current_location);
    }

    if (!isEmpty(data.organizations.current_org)
     && currentOrganization !== data.organizations.current_org) {
      changeOrganization(data.organizations.current_org);
    }
  }

  render() {
    const {
      items,
      data,
      isLoading,
      changeActiveMenu,
      changeOrganization,
      changeLocation,
      currentOrganization,
      currentLocation,
    } = this.props;
    return (
      <VerticalNav
        hoverDelay={0}
        items={items}
        onItemClick={changeActiveMenu}
        {...this.props}
      >
        <VerticalNav.Masthead>
          <VerticalNav.Brand
            title="foreman"
            iconImg={data.logo}
            href={data.root}
          />
          <TaxonomySwitcher
            taxonomiesBool={data.taxonomies}
            currentLocation={currentLocation}
            locations={data.locations.available_locations}
            onLocationClick={changeLocation}
            currentOrganization={currentOrganization}
            organizations={data.organizations.available_organizations}
            onOrgClick={changeOrganization}
            isLoading={isLoading}
          />
          <UserDropdowns
            notificationUrl={data.notification_url}
            user={data.user}
            changeActiveMenu={changeActiveMenu}
          />
        </VerticalNav.Masthead>
      </VerticalNav>
    );
  }
}

Layout.propTypes = {
  currentOrganization: PropTypes.string,
  currentLocation: PropTypes.string,
  isLoading: PropTypes.bool,
  fetchMenuItems: PropTypes.func,
  changeActiveMenu: PropTypes.func,
  changeOrganization: PropTypes.func,
  changeLocation: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    iconClass: PropTypes.string.isRequired,
    initialActive: PropTypes.bool,
    subItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      isDivider: PropTypes.bool,
      className: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    })),
  })),
  data: PropTypes.shape({
    menu: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      children: PropTypes.any,
    })),
    locations: PropTypes.shape({
      current_location: PropTypes.string,
      available_locations: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
      })),
    }),
    organizations: PropTypes.shape({
      current_organization: PropTypes.string,
      available_organizations: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
      })),
    }),
    root: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    notification_url: PropTypes.string.isRequired,
    taxonomies: PropTypes.shape({
      locations: PropTypes.bool.isRequired,
      organizations: PropTypes.bool.isRequired,
    }),
    user: PropTypes.shape({
      current_user: PropTypes.object.isRequired,
      user_dropdown: PropTypes.arrayOf(PropTypes.shape({
        children: PropTypes.any,
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })),
    }),
  }),
};

Layout.defaultProps = {
  items: [],
  data: {},
  currentOrganization: 'Any Organization',
  currentLocation: 'Any Location',
  isLoading: false,
  fetchMenuItems: noop,
  changeActiveMenu: noop,
  changeOrganization: noop,
  changeLocation: noop,
};

export default Layout;
