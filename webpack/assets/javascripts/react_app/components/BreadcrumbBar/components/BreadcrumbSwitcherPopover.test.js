import { testComponentSnapshotsWithFixtures } from '../../../common/testHelpers';

import BreadcrumbSwitcherPopover from './BreadcrumbSwitcherPopover';
import { breadcrumbSwitcherLoading, breadcrumbSwitcherLoaded } from '../BreadcrumbBar.fixtures';

const fixtures = {
  'render loading state': { id: 'some-id', ...breadcrumbSwitcherLoading },
  'render resources list': { id: 'some-id', ...breadcrumbSwitcherLoaded },
};

describe('BreadcrumbSwitcherPopover', () => testComponentSnapshotsWithFixtures(BreadcrumbSwitcherPopover, fixtures));
