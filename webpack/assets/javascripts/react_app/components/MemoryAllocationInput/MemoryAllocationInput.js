import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { WarningTriangleIcon, ErrorCircleOIcon } from '@patternfly/react-icons';
import { HelpBlock, FormGroup, Grid, Col, Row } from 'patternfly-react';
import { translate as __ } from '../../common/I18n';
import NumberInput from '../common/forms/NumberInput';
import './memoryAllocationInput.scss';
import { noop } from '../../common/helpers';

const MemoryAllocationInput = ({
  label,
  defaultValue,
  onChange,
  maxValue,
  maxValueSizeType,
  recommendedMaxValue,
  recommendedMaxValueSizeType,
}) => {
  const GBFormat = 'GB';
  const MBFormat = 'MB';
  const GBStep = 1024;
  const MBStep = 256;
  const [value, setValue] = useState(defaultValue);
  const [sizeType, setSizeType] = useState(MBFormat);
  const [step, setStep] = useState(MBStep);

  const getValidationState = useCallback(() => {
    if (value > maxValue && maxValueSizeType === sizeType && maxValue != null)
      return 'error';
    else if (
      value > recommendedMaxValue &&
      recommendedMaxValueSizeType === sizeType &&
      recommendedMaxValue != null
    )
      return 'warning';
    return null;
  }, [recommendedMaxValue, maxValue, value]);

  const handleValueIncrease = () => {
    if (value >= GBStep) {
      setValue(value + GBStep);
    } else {
      setValue(value + MBStep);
    }
  };

  const handleValueDecrease = () => {
    if (value <= GBStep) {
      setValue(value - MBStep);
    } else {
      setValue(value - GBStep);
    }
  };

  const handleTypedValue = v => {
    if (v > GBStep) {
      setValue(Math.round(v / GBStep) * GBStep);
    } else {
      setValue(Math.round(v / MBStep) * MBStep);
    }
  };

  const handleChange = v => {
    if (v === value + 1) {
      handleValueIncrease();
    } else if (v === value - 1) {
      handleValueDecrease();
    } else {
      handleTypedValue(v);
    }

    onChange(value);
  };

  const format = v => {
    // used the buttons
    if (v % MBStep === 0) {
      if (v >= GBStep) {
        return `${v / GBStep} ${GBFormat}`;
      }

      return `${v} ${MBFormat}`;
    }

    // typed value
    return v;
  };

  const parser = str => str.replace(/\D/g, '');
  const validationState = getValidationState();
  return (
    <FormGroup validationState={validationState}>
      <Grid>
        <Row>
          <Col>
            <NumberInput
              value={value}
              format={format}
              parser={parser}
              step={1}
              onChange={v => handleChange(v)}
              label={label}
            />
          </Col>
        </Row>
        {validationState === 'warning' && (
          <HelpBlock>
            <WarningTriangleIcon className="help-block-icon" />
            {__('Specified value is higher than recommended maximum')}
          </HelpBlock>
        )}
        {validationState === 'error' && (
          <HelpBlock>
            <ErrorCircleOIcon className="help-block-icon" />
            {__('Specified value is higher than maximum value')}
          </HelpBlock>
        )}
      </Grid>
    </FormGroup>
  );
};

MemoryAllocationInput.propTypes = {
  /** Set the label of the memory allocation input */
  label: NumberInput.propTypes.label,
  /** Set the default value of the numeric input */
  defaultValue: PropTypes.number,
  /** Set the recommended max value of the numeric input */
  recommendedMaxValue: PropTypes.number,
  /** Set the max value of the numeric input */
  maxValue: PropTypes.number,
  /** Set the max value size type of the numeric input */
  maxValueSizeType: PropTypes.oneOf(['MB', 'GB']),
  /** Set the recommended max value size type of the numeric input */
  recommendedMaxValueSizeType: PropTypes.oneOf(['MB', 'GB']),
  /** Set the onChange function of the numeric input */
  onChange: PropTypes.func,
};

MemoryAllocationInput.defaultProps = {
  label: __('Memory'),
  defaultValue: 1,
  onChange: noop,
  recommendedMaxValue: null,
  maxValue: null,
  maxValueSizeType: 'GB',
  recommendedMaxValueSizeType: 'GB',
};

export default MemoryAllocationInput;
