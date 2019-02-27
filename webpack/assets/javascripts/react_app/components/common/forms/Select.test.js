import $ from '@theforeman/vendor/jquery';
import '@theforeman/vendor/select2';
import { mount } from 'enzyme';
import React from '@theforeman/vendor/react';

import Select from './Select';

beforeEach(() => {
  document.body.innerHTML = '<div>\n  <span id="select" />\n</div>';
});

describe('Select', () => {
  it('onChange called exactly once even after update', () => {
    const options = { one: '1', two: '2' };
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <Select options={options} onChange={onChangeMock} />,
      { attachTo: document.getElementById('select') }
    );

    $('#select select').trigger('change');
    expect(onChangeMock).toHaveBeenCalledTimes(1);

    options.three = '3';
    wrapper.setProps(Object.assign({}, wrapper.props(), { options }));

    onChangeMock.mockClear();
    $('#select select').trigger('change');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
