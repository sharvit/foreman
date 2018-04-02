import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as PfBreadcrumb } from 'patternfly-react';
import 'patternfly-react/dist/sass/_breadcrumb.scss';

const Breadcrumb = ({
  items, title, children, ...props
}) => {
  if (items.length === 1) {
    return (
      <div className="form-group">
        <h1>{items[0].caption}</h1>
      </div>
    );
  }

  return (
      <PfBreadcrumb title={title} {...props}>
        {items.map((item, index) => (
          <PfBreadcrumb.Item
            key={index}
            active={index === items.length - 1}
            href={item.url}
            dangerouslySetInnerHTML={{ __html: item.caption }}
          />
        ))}
        {children}
      </PfBreadcrumb>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  title: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    url: PropTypes.string,
  })),
};

Breadcrumb.defaultProps = {
  children: null,
  title: false,
  items: [],
};

export default Breadcrumb;
