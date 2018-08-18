import React from 'react';

import DonutChart from './common/charts/DonutChart';
import StatisticsChartsList from './statistics/StatisticsChartsList';
import PowerStatus from './hosts/powerStatus/';
import NotificationContainer from './notifications/';
import ToastsList from './toastNotifications/';
import StorageContainer from './hosts/storage/vmware/';
import PasswordStrength from './PasswordStrength';
import BreadcrumbBar from './BreadcrumbBar';
import FactChart from './factCharts';
import SearchBar from './SearchBar';
import ModelsTable from './ModelsTable';
import Layout from './Layout';
import Application from '../Application';
import HwCreatePage from './HardwareModel/New';
import HWModelEditPage from './HardwareModel/Edit';

const componentRegistry = {
  registry: {},

  register({
    name = null, type = null, store = true, data = true,
  }) {
    if (!name || !type) {
      throw new Error('Component name or type is missing');
    }
    if (this.registry[name]) {
      throw new Error(`Component name already taken: ${name}`);
    }

    this.registry[name] = { type, store, data };
    return this.registry;
  },

  registerMultiple(componentObjs) {
    return Object.values(componentObjs).forEach(obj => this.register(obj));
  },

  getComponent(name) {
    return this.registry[name];
  },

  registeredComponents() {
    return Object.keys(this.registry).join(', ');
  },

  markup(name, data, store) {
    const currentComponent = this.getComponent(name);

    if (!currentComponent) {
      throw new Error(`Component not found:  ${name} among ${this.registeredComponents()}`);
    }
    const ComponentName = currentComponent.type;

    return (
      <ComponentName
        data={currentComponent.data ? data : undefined}
        store={currentComponent.store ? store : undefined}
      />
    );
  },
};

const coreComponets = [
  { name: 'DonutChart', type: DonutChart },
  { name: 'StatisticsChartsList', type: StatisticsChartsList },
  { name: 'PowerStatus', type: PowerStatus },
  { name: 'NotificationContainer', type: NotificationContainer },
  { name: 'ToastNotifications', type: ToastsList, data: false },
  { name: 'StorageContainer', type: StorageContainer },
  { name: 'PasswordStrength', type: PasswordStrength },
  { name: 'BreadcrumbBar', type: BreadcrumbBar },
  { name: 'FactChart', type: FactChart },
  { name: 'SearchBar', type: SearchBar },
  { name: 'ModelsTable', type: ModelsTable },
  { name: 'Layout', type: Layout },
  { name: 'Application', type: Application, store: false },
  { name: 'HwCreatePage', type: HwCreatePage },
  { name: 'HWModelEditPage', type: HWModelEditPage },
];

componentRegistry.registerMultiple(coreComponets);

export default componentRegistry;
