import SearchBar from '../SearchBar';
import { SearchBarProps } from '../SearchBar.fixtures';
import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

const fixtures = {
  'renders AutoComplete': SearchBarProps,
};
describe('AutoComplete', () => {
  describe('rendering', () => {
    testComponentSnapshotsWithFixtures(SearchBar, fixtures);
  });
});
