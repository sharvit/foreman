import ReactNumericInput from 'react-numeric-input';
import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../../common/helpers';
import CommonForm from './CommonForm';

const NumericInput = ({
  label,
  className,
  value,
  onChange,
  format,
  step,
  precision,
  minValue,
}) => (
  <CommonForm label={label} className={`common-numericInput ${className}`}>
    <ReactNumericInput
      format={format}
      step={step}
      min={minValue}
      value={value}
      precision={precision}
      onChange={onChange}
    />
  </CommonForm>
);

NumericInput.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  format: PropTypes.func,
  step: PropTypes.number,
  precision: PropTypes.number,
  minValue: PropTypes.number,
  onChange: PropTypes.func,
};

NumericInput.defaultProps = {
  label: '',
  className: '',
  value: 0,
  format: null,
  step: 1,
  precision: 0,
  minValue: 0,
  onChange: noop,
};

export default NumericInput;
