export const breadcrumbItems = {
  items: [
    {
      caption: 'root',
      url: '/some-url',
    },
    {
      caption: 'child',
    },
  ],
};

export const breadcrumbTitleItems = {
  items: [
    {
      caption: 'title',
    },
  ],
};

export const resource = {
  url: 'some-url',
  controller: 'some-controller',
  action: 'some-action',
  nameField: 'some-field',
};

export const resourceList = [
  { name: 'Host 1', url: '#' },
  { name: 'Host 2', url: '#' },
  { name: 'Host 3 with a very long name', url: '#' },
  { name: 'Host 4', url: undefined, onClick: jest.fn() },
  { name: 'Host 5', url: '#', onClick: undefined },
];

export const breadcrumbSwitcherLoading = {
  loading: true,
  resources: [],
};

export const breadcrumbSwitcherLoaded = {
  loading: false,
  resources: resourceList,
};
