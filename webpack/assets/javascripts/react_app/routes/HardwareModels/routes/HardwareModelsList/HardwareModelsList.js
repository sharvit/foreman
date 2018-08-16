import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'patternfly-react';

import SearchBar from '../../../../components/SearchBar';
import ModelsTable from '../../../../components/ModelsTable';

import PageLayout from '../../../../components/common/PageLayout/PageLayout';

const HardwareModelsList = () => {
  const title = <h1>{__('Hardware Models')}</h1>;

  const toolbarButtons = <React.Fragment>
    <Link to="/models/new">
      <Button bsStyle="primary">{__('Create Model')}</Button>
    </Link>
  </React.Fragment>;

  const searchBar = <SearchBar data={{
    controller: 'models',
    autocomplete: {
      url: '/models/auto_complete_search?search=',
      searchQuery: '',
    },
    bookmarks: {
      url: '/api/bookmarks',
      canCreate: true,
      documentationUrl: '/some-url',
    },
  }} />;

  return <PageLayout
    title={title}
    toolbarButtons={toolbarButtons}
    searchBar={searchBar}
  >
    <ModelsTable />
  </PageLayout>;
};

export default HardwareModelsList;
