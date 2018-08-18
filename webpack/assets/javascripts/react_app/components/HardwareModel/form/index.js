import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { required, length } from 'redux-form-validators';
import Form from '../../common/forms/Form';
import TextField from '../../common/forms/TextField';
import * as FormActions from '../../../redux/actions/common/forms';

const submit = ({
  name, model, vendor, information,
}, dispatch, props) => {
  const { submitForm, url, method = 'post', message = null } = props;
  const values = {
    name,
    hardware_model: model,
    vendor_class: vendor,
    info: information,
  };

  return submitForm({
    url, values, item: 'Model', method, message,
  }).then(() =>
    window.Turbolinks.visit('/models'));
};

class HardwareModelForm extends React.Component {
  render() {
    const {
      handleSubmit, submitting, error, onCancel,
    } = this.props;

    return (
      <Form
        onSubmit={handleSubmit(submit)}
        onCancel={onCancel}
        disabled={submitting}
        submitting={submitting}
        error={error}
      >
        <TextField
          name="name"
          type="text"
          required="true"
          label={__('Name')}
          validate={[required(), length({ max: 254 })]}
        />
        <TextField
          name="model"
          type="text"
          label={__('Hardware Model')}
          inputClassName="col-md-8"
          validate={[length({ max: 254 })]}
        />
        <TextField
          name="vendor"
          type="text"
          label={__('Vendor Class')}
          inputClassName="col-md-8"
          validate={[length({ max: 254 })]}
        />
        <TextField
          name="information"
          type="textarea"
          label={__('Information')}
          inputClassName="col-md-8"
          validate={[length({ max: 4096 })]}
        />
      </Form>
    );
  }
}

const form = reduxForm({
  form: 'hardware-modal',
})(HardwareModelForm);

export default connect(
  ({ hwModel }, {
    name, model, vendor, information, id,
  }) => ({
    fields: ['name', 'model', 'vendor', 'information', 'id'],
    initialValues: {
      name, model, vendor, information, id,
    },
  }),
  FormActions,
)(form);
