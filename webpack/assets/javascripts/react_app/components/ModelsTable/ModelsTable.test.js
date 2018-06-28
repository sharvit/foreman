import React from 'react';
import { shallow } from 'enzyme';
import ModelsTable from './ModelsTable';

describe('ModelsTable', () => {
  it('smoke test', () => {
    const getModelItems = jest.fn().mockReturnValue([]);
    shallow(<ModelsTable
          search=''
          results={[]}
          getTableItems={getModelItems}
        />);
    expect(getModelItems.mock.calls.length).toBe(1);
  });
});
