import React from 'react';
import { Table as PfTable } from 'patternfly-react';

export const headerFormatterWithProps = (
  value,
  {
    column: {
      header: { props },
    },
  },
) => <PfTable.Heading {...props}>{value}</PfTable.Heading>;

export const cellFormatterWithProps = (
  value,
  {
    column: {
      cell: { props },
    },
  },
) => <PfTable.Cell {...props}>{value}</PfTable.Cell>;
