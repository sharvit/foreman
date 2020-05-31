import { testComponentSnapshotsWithFixtures } from '../../../common/testHelpers';
import MemoryAllocationInput from '../MemoryAllocationInput';

const props = {
  label: 'Memory',
};

const fixtures = {
  'should render with default props': {
    ...props,
  },
};

describe('MemoryAllocationInput', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(MemoryAllocationInput, fixtures));
});
