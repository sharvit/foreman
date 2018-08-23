import React from 'react';
import { withRouter } from 'react-router-dom';

import BreadcrumbsBar from '../../../../components/BreadcrumbBar';
import Form from '../../../../components/HardwareModel/form';

const HardwareModelsNew = ({ history }) => (
  <div>
    <BreadcrumbsBar
      data={{
        breadcrumbItems: [
          {
            caption: __('Hardware Models'),
            onClick: () =>
              history.push('/models'),
          },
          {
            caption: __('New Hardware Model'),
          },
        ],
      }}
    />
    <Form routeTo={history} url={'/api/models'} />{' '}
  </div>
);

export default withRouter(HardwareModelsNew);
