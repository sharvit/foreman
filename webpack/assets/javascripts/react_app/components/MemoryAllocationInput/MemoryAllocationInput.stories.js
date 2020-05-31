import React from 'react';
import { number, action, text } from '@theforeman/stories';
import MemoryAllocationInput from './MemoryAllocationInput';

export default {
  title: 'Components|Form/MemoryAllocationInput',
  component: MemoryAllocationInput,
  parameters: {
    centered: { disable: true },
  },
};

export const UseMemoryAllocationInput = () => (
  <MemoryAllocationInput
    label={text('Label', 'Memory')}
    defaultValue={number('DefaultValue', 1)}
    onChange={action('Value was changed')}
    recommendedMaxValue={number('RecommendedMaxValue', 10)}
    recommendedMaxValueSizeType={text('RecommendedMaxValueSizeType', 'GB')}
    maxValue={number('MaxValue', 20)}
    maxValueSizeType={text('MaxValueSizeType', 'GB')}
  />
);
