import React from 'react';
import HardwareModels from './HardwareModels';

const ApplicationRoutes = [{
  path: '/models',
  render: props => <HardwareModels {...props} />,
}];

export default ApplicationRoutes;
