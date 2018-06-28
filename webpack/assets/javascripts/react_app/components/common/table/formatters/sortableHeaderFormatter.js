import React from 'react';

const nextOrder = order => (order === 'ASC' ? 'DESC' : 'ASC');

const sortableHeaderFormatter = sortController => (label, props) => {
  const order =
    props.property === sortController.property
      ? nextOrder(sortController.order)
      : 'ASC';

  return (
    <a
      href="#"
      onClick={() => {
        sortController.apply(props.property, order);
      }}>
      {label}
    </a>
  );
};

export default sortableHeaderFormatter;
