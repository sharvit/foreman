import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from './components/Breadcrumb';
import BreadcrumbSwitcher from './components/BreadcrumbSwitcher';

class BreadcrumbBar extends React.Component {
  componentDidMount() {
    const { data: { resource }, loadSwitcherResourcesByResource } = this.props;

    loadSwitcherResourcesByResource(resource);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    const getResourceFromProps = props => props.data.resource;

    const currentResource = getResourceFromProps(this.props);
    const nextResource = getResourceFromProps(nextProps);

    if (currentResource.url !== nextResource.url) {
      this.props.loadSwitcherResourcesByResource(nextResource);
    }
  }

  render() {
    const {
      data: { breadcrumbItems, isSwitchable, resource },
      resourceSwitcherItems,
      isSwitcherOpen,
      toggleSwitcher,
      loadResourcesByResourceUrl,
    } = this.props;

    return (
      <div className="breadcrumb-bar">
        <Breadcrumb items={breadcrumbItems}>
          {isSwitchable && (
            <BreadcrumbSwitcher
              isOpen={isSwitcherOpen}
              resources={resourceSwitcherItems}
              onToggleClick={() => toggleSwitcher()}
              onOpened={() => loadResourcesByResourceUrl(resource)}
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
  resourceSwitcherItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  isSwitcherOpen: PropTypes.bool,
  toggleSwitcher: PropTypes.func,
  loadSwitcherResourcesByResource: PropTypes.func,
};

BreadcrumbBar.defaultProps = {
  data: {
    breadcrumbItems: [],
    isSwitchable: false,
  },
  resourceSwitcherItems: [],
  isSwitcherOpen: false,
  toggleSwitcher: () => null,
  loadResourcesByResourceUrl: () => null,
};

export default BreadcrumbBar;
