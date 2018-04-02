import React from 'react';
import PropTypes from 'prop-types';
import { Popover, ListGroup, ListGroupItem } from 'patternfly-react';
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip';
import './BreadcrumbSwitcherPopover.scss';

const BreadcrumbSwitcherPopover = ({ resources, loading, ...props }) => (
  <Popover className="breadcrumb-switcher-popover" {...props}>
    {loading ? (
      <div>Loading...</div>
    ) : (
      <ListGroup className="scrollable-list">
        {resources.map((item) => {
          const { onClick, url, name } = item;
          return (
            <ListGroupItem className="no-border" key={`id-${name}`} href={url} onClick={onClick}>
              <EllipsisWithTooltip>{name}</EllipsisWithTooltip>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    )}
  </Popover>
);

BreadcrumbSwitcherPopover.propTypes = {
  ...Popover.propTypes,
  loading: PropTypes.bool,
  resources: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  })),
};

BreadcrumbSwitcherPopover.defaultProps = {
  loading: false,
  resources: [],
};

export default BreadcrumbSwitcherPopover;
