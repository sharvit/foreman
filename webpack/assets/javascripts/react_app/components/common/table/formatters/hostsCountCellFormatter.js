import React from 'react';

const hostsCountCellFormatter = controllerSingular => (
  value,
  { rowData: { name } },
) => (
  <a href={`hosts?search=${controllerSingular}+%3D+"${encodeURI(name)}"`}>
    {value}
  </a>
);

export default hostsCountCellFormatter;
