import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link
      to={`/${controllerPluralize}/${id}-${encodeURI(name)}/edit`}
      data-id={`aid_${controllerPluralize}-${id}-${encodeURI(name)}_edit`}>
      {value}
    </Link>
  ) : (
    <a href="#" className="disabled" disabled="disabled" onClick={() => {}}>
      {value}
    </a>
  ));

export default nameCellFormatter;
