import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from './components/Breadcrumb';
import BreadcrumbSwitcher from './components/BreadcrumbSwitcher';

class BreadcrumbBar extends React.Component {
  render() {
    const {
      data: { breadcrumbItems, isSwitchable, resource },
      resourceSwitcherItems,
      isLoadingResources,
      isSwitcherOpen,
      toggleSwitcher,
      closeSwitcher,
      loadSwitcherResourcesByResource,
    } = this.props;

    return (
      <div className="breadcrumb-bar">
        <Breadcrumb title items={breadcrumbItems}>
          {isSwitchable && (
            <BreadcrumbSwitcher
              open={isSwitcherOpen}
              isLoadingResources={isLoadingResources}
              resources={resourceSwitcherItems}
              onTogglerClick={() => toggleSwitcher()}
              onOverlayHide={() => closeSwitcher()}
              onOverlayEnter={() => loadSwitcherResourcesByResource(resource)}
            />
          )}
        </Breadcrumb>
        <hr className="breadcrumb-line" />
      </div>
    );
  }
}

BreadcrumbBar.propTypes = {
  data: PropTypes.shape({
    isSwitchable: PropTypes.bool,
    resource: PropTypes.shape({
      url: PropTypes.string,
      controller: PropTypes.string,
      action: PropTypes.string,
      nameField: PropTypes.string,
    }),
    breadcrumbItems: PropTypes.arrayOf(PropTypes.shape({
      caption: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })),
  }),
  resourceSwitcherItems: BreadcrumbSwitcher.propTypes.resources,
  isLoadingResources: PropTypes.bool,
  isSwitcherOpen: PropTypes.bool,
  toggleSwitcher: PropTypes.func,
  closeSwitcher: PropTypes.func,
  loadSwitcherResourcesByResource: PropTypes.func,
};

BreadcrumbBar.defaultProps = {
  data: {
    breadcrumbItems: [],
    isSwitchable: false,
  },
  resourceSwitcherItems: [],
  isLoadingResources: false,
  isSwitcherOpen: false,
  toggleSwitcher: () => null,
  closeSwitcher: () => null,
  loadSwitcherResourcesByResource: () => null,
};

export default BreadcrumbBar;
