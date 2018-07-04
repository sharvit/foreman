import React from 'react';
import groupBy from 'lodash/groupBy';
import { TypeAheadSelect } from 'patternfly-react';
import SubstringWrapper from '../../common/SubstringWrapper';
import { clearSpaces } from '../../../common/helpers';

const { Menu, MenuItem } = TypeAheadSelect;

const AutoCompleteMenu = ({ results, menuProps }) => {
  let itemIndex = 0;
  const grouped = groupBy(results, r => r.category);
  const items = Object.keys(grouped).sort().map(category => [
    // Don't put a divider above the first item.
    !!itemIndex && <Menu.Divider key={`${category}-divider`} />,
        <Menu.Header key={`${category}-header`}>
          {category}
        </Menu.Header>,
        grouped[category].map((result) => {
          const label = clearSpaces(result.label);
          const item =
            <MenuItem key={itemIndex} option={label} position={itemIndex}>
              <SubstringWrapper substring={menuProps.text}>
                {label}
              </SubstringWrapper>
            </MenuItem>;
          itemIndex += 1;
          return item;
        }),
  ]);
  return <Menu {...menuProps}>{items}</Menu>;
};

export default AutoCompleteMenu;
