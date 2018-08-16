import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import ApplicationRoutesSwitcher from './routes/ApplicationRoutesSwitcher';

class Aplication extends React.Component {
  render() {
    const { layout } = this.props.data;

    return (
      <Router>
        <Layout data={layout}>
          <ApplicationRoutesSwitcher />
        </Layout>
      </Router>
    );
  }
}

export default Aplication;
