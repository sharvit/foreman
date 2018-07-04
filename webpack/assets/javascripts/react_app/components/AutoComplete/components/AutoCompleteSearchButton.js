import React from 'react';
import { Button, Col, Icon } from 'patternfly-react';

const SearchButton = props => (
    <Button
        {...props}
        className={`autocomplete-search-btn ${props.className}`}>
        <Icon name="search" />
        <Col className="autocomplete-search-btn-text" xsHidden>&nbsp;{__('Search')}</Col>
    </Button>
);

export default SearchButton;
