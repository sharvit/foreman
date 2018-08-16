import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'patternfly-react';

const PageLayout = ({
  title, toolbarButtons, searchBar, children,
}) => (
  <div id="main">
    <div id="content">
      {title}
      <Row>
        <Col className="title_filter" md={searchBar ? 6 : 4}>
          <div id="search-bar">{searchBar}</div>
        </Col>
        <Col id="title_action" md={searchBar ? 6 : 8}>
          <div className="btn-toolbar pull-right">{toolbarButtons}</div>
        </Col>
      </Row>
      {children}
    </div>
  </div>
);

PageLayout.propTypes = {
  title: PropTypes.node,
  toolbarButtons: PropTypes.node,
  searchBar: PropTypes.node,
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  title: null,
  toolbarButtons: null,
  searchBar: null,
  children: null,
};

export default PageLayout;
