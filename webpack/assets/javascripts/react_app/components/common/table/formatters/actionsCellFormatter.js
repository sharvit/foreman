import React from 'react';

export const deleteActionCellFormatter = controllerPluralize => (
  value,
  // eslint-disable-next-line camelcase
  { rowData: { can_delete, name, id } },
) =>
  // eslint-disable-next-line camelcase
  (can_delete ? (
    <span className="btn btn-sm btn-default">
      <a
        data-confirm={__(`Delete ${name}?`)}
        data-id={`aid_${controllerPluralize}_${id}-${encodeURI(name)}`}
        rel="nofollow"
        data-method="delete"
        href={`/${controllerPluralize}/${id}-${encodeURI(name)}`}>
        Delete
      </a>
    </span>
  ) : null);
