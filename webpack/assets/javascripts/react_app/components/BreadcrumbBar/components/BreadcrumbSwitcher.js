import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from 'react-bootstrap';

import BreadcrumbSwitcherPopover from './BreadcrumbSwitcherPopover';
import BreadcrumbSwitcherToggler from './BreadcrumbSwitcherToggler';

class BreadcrumbSwitcher extends React.Component {
  render() {
    const {
      open,
      isLoadingResources,
      resources,
      onTogglerClick,
      onOverlayHide,
      onOverlayEnter,
    } = this.props;

    return (
      <div className="breadcrumb-switcher" style={{ position: 'relative' }}>
        <BreadcrumbSwitcherToggler
          onClick={() => onTogglerClick()}
          ref={(ref) => {
            this.togglerRef = ref;
          }}
        />

        <Overlay
          rootClose
          show={open}
          container={this}
          placement="bottom"
          onHide={() => onOverlayHide()}
          onEnter={() => onOverlayEnter()}
          target={() => ReactDOM.findDOMNode(this.togglerRef)}
        >
          <BreadcrumbSwitcherPopover
            id="breadcrumb-switcher-popover"
            loading={isLoadingResources}
            resources={resources}
          />
        </Overlay>
      </div>
    );
  }
}

BreadcrumbSwitcher.propTypes = {
  open: PropTypes.bool,
  isLoadingResources: PropTypes.bool,
  resources: BreadcrumbSwitcherPopover.propTypes.resources,
  onTogglerClick: PropTypes.func,
  onOverlayHide: PropTypes.func,
  onOverlayEnter: PropTypes.func,
};

BreadcrumbSwitcher.defaultProps = {
  open: false,
  isLoadingResources: false,
  resources: [],
  onTogglerClick: () => null,
  onOverlayHide: () => null,
  onOverlayEnter: () => null,
};

export default BreadcrumbSwitcher;
