import { testComponentSnapshotsWithFixtures } from '../../../common/testHelpers';

import BreadcrumbSwitcher from './BreadcrumbSwitcher';
import { breadcrumbSwitcherLoading, breadcrumbSwitcherLoaded } from '../BreadcrumbBar.fixtures';

const fixtures = {
  'render loading state': breadcrumbSwitcherLoading,
  'render resources list': breadcrumbSwitcherLoaded,
};

describe('BreadcrumbSwitcher', () => testComponentSnapshotsWithFixtures(BreadcrumbSwitcher, fixtures));
