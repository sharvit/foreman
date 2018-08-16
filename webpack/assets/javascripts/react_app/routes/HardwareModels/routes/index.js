import React from 'react';
import HardwareModelsList from './HardwareModelsList/HardwareModelsList';
import HardwareModelsNew from './HardwareModelsNew/HardwareModelsNew';
import HardwareModelsEdit from './HardwareModelsEdit/HardwareModelsEdit';

const routes = basePath => [{
  path: basePath,
  exact: true,
  render: props => <HardwareModelsList {...props} />,
}, {
  path: `${basePath}/new`,
  exact: true,
  render: props => <HardwareModelsNew {...props} />,
}, {
  path: `${basePath}/:hardwareModelId/edit`,
  exact: true,
  render: props => <HardwareModelsEdit {...props} />,
}];

export default routes;
