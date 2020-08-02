import RCInputNumber from 'rc-input-number';
import React from 'react';
import PropTypes from 'prop-types';
import 'rc-input-number/assets/index.css';
import './NumberInput.css';

import { noop } from '../../../common/helpers';
import CommonForm from './CommonForm';

const NumberInput = ({
  label,
  className,
  value,
  onChange,
  format,
  parser,
  step,
  precision,
  minValue,
  disabled,
  readOnly,
}) => (
  <CommonForm label={label} className={`common-numericInput ${className}`}>
    <RCInputNumber
      formatter={format}
      parser={parser}
      step={step}
      min={minValue}
      value={value}
      precision={precision}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
    />
  </CommonForm>
);

NumberInput.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  format: PropTypes.func,
  parser: PropTypes.func,
  step: PropTypes.number,
  precision: PropTypes.number,
  minValue: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

NumberInput.defaultProps = {
  label: '',
  className: '',
  value: 0,
  format: null,
  parser: undefined,
  step: 1,
  precision: 0,
  minValue: 0,
  onChange: noop,
  disabled: false,
  readOnly: false,
};

export default NumberInput;
