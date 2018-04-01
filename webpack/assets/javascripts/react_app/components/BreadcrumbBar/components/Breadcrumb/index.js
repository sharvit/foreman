import React from 'react';
import { Breadcrumb as PfBreadcrumb } from 'patternfly-react';
import 'patternfly-react/dist/sass/_breadcrumb.scss';

const Breadcrumb = ({ items, children }) => {
  if (items.length === 1) {
    return (
      <div className="form-group">
        <h1>{items[0].caption}</h1>
      </div>
    );
  }

  return (
      <PfBreadcrumb title>
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

export default Breadcrumb;
