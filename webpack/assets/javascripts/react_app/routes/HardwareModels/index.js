import React from 'react';
import { Switch, Route } from 'react-router-dom';

import createSubRoutes from './routes';

const HardwareModels = ({ match }) => {
  const routes = createSubRoutes(match.path);

  return <Switch>
    {routes.map(props => <Route key={props.path} {...props} />)}
  </Switch>;
};

export default HardwareModels;
