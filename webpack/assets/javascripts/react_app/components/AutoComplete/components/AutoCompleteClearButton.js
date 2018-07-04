import React from 'react';
import UUID from 'uuid/v1';
import { Icon, OverlayTrigger, Tooltip } from 'patternfly-react';


const AutoCompleteClearButton = ({ onClear }) => {
  const tooltip = (<Tooltip id={UUID()}>{__('Clear')}</Tooltip>);
  return (
  <OverlayTrigger overlay={tooltip} placement="top" trigger={['hover', 'focus']}>
    <Icon
      name="close"
      className="autocomplete-clear-button"
      onClick={onClear}
    />
  </OverlayTrigger>
  );
};


export default AutoCompleteClearButton;
