import React from 'react';
import Form from '../../../../components/HardwareModel/form';
import { withRouter } from 'react-router-dom';

const HardwareModelsNew = props => (
  <div>
    {' '}
    <h2> {__('New Hardware Model')} </h2> <Form routeTo={props.history} url={'/api/models'} />{' '}
  </div>
);

export default withRouter(HardwareModelsNew);
