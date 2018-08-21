import React from 'react';
import { Spinner } from 'patternfly-react';
import Form from './form';
import API from '../../API';

class HWModelEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: undefined };
  }
  componentDidMount() {
    const currentId = window.location.pathname.split('/')[2];
    API.get(`/api/models/${currentId}`).then(({
      data: {
        name, hardware_model, vendor_class, info, id,
      },
    }) => {
      this.setState({
        id,
        name,
        model: hardware_model,
        vendor: vendor_class,
        information: info,
      });
    });
  }

  render() {
    const {
      data: { url },
    } = this.props;
    const {
      information, name, model, vendor, id,
    } = this.state;
    if (id) {
      return (
        <Form
          method='put'
          message={__('Model has been updated !')}
          url={`${url}${id}`}
          id={id}
          name={name}
          model={model}
          vendor={vendor}
          information={information}
        />
      );
    }
    return <Spinner loading size='md'/>;
  }
}

export default HWModelEditPage;
