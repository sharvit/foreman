import { radioMock } from './DiffView.fixtures';
import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import DiffRadioButtons from './DiffRadioButtons';

const fixtures = {
  'render DiffRadioButtons': radioMock,
};

describe('DiffView', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(DiffRadioButtons, fixtures));
});
