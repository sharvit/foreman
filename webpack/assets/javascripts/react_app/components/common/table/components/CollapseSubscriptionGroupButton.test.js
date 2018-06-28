import { testComponentSnapshotsWithFixtures } from '../../../../common/testHelpers';

import CollapseSubscriptionGroupButton from './CollapseSubscriptionGroupButton';

const fixtures = {
  'renders CollapseSubscriptionGroupButton collapsed': {
    collapsed: true,
    onClick: jest.fn(),
  },
  'renders CollapseSubscriptionGroupButton opened': {
    collapsed: false,
    onClick: jest.fn(),
  },
};

describe('CollapseSubscriptionGroupButton', () => testComponentSnapshotsWithFixtures(CollapseSubscriptionGroupButton, fixtures));
