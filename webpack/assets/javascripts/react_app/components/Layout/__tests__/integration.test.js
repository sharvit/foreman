import React from 'react';

import IntegrationTestHelper from '../../../common/IntegrationTestHelper';

import { hasTaxonomiesMock } from '../Layout.fixtures';
import Layout, { reducers } from '../index';

jest.mock('../../notifications/index', () => 'notification');

describe('Layout integration test', () => {
  it('should flow', async () => {
    const integrationTestHelper = new IntegrationTestHelper(reducers);

    const component = integrationTestHelper.mount(<Layout {...hasTaxonomiesMock} />);
    component.update();
    await IntegrationTestHelper.flushAllPromises();

    const yamlLocation = component.find('.location_menuitem');

    integrationTestHelper.takeStoreSnapshot('initial state');

    yamlLocation.at(0).simulate('click');

    integrationTestHelper.takeStoreAndLastActionSnapshot('Location "yaml" clicked');
    expect(component.find('#location-dropdown > .dropdown-toggle').text()).toBe('yaml');
  });
});
