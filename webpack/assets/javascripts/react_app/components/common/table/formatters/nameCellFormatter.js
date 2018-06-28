import React from 'react';

const nameCellFormatter = controllerPluralize => (
  value,
  {
    rowData: {
      // eslint-disable-next-line camelcase
      can_edit, actions, id, name,
    },
  },
) =>
  // eslint-disable-next-line camelcase
  (can_edit ? (
    <a
      href={`/${controllerPluralize}/${id}-${encodeURI(name)}/edit`}
      data-id={`aid_${controllerPluralize}-${id}-${encodeURI(name)}_edit`}>
      {value}
    </a>
  ) : (
    <a href="#" className="disabled" disabled="disabled" onClick={() => {}}>
      {value}
    </a>
  ));

export default nameCellFormatter;
