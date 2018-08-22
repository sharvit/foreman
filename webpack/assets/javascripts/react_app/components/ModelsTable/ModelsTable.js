import React from 'react';
import PropTypes from 'prop-types';
import URI from 'urijs';
import {
  Table,
  ellipsisCellFormatter,
  cellFormatter,
  headerFormatterWithProps,
  cellFormatterWithProps,
  nameCellFormatter,
  hostsCountCellFormatter,
  deleteActionCellFormatter,
  sortableHeaderFormatter,
} from '../common/table';
import Loader from '../common/Loader';
import MessageBox from '../common/MessageBox';
import './ModelsTable.css';

class ModelsTable extends React.Component {
  componentDidMount() {
    const { getTableItems } = this.props;

    getTableItems(
      'api/models',
      new URI(window.location.href).query(true),
      'models',
    );
  }
  render() {
    // NOTE: empty state is not rendered by react right now.  It's done by Rails.
    // TODO(bshuster): Remove this note once HW Model is turned to a React page.
    const emptyState = {
      header: __('Hardware Models'),
      description: __('Hardware models describe the hardware ' +
          'types of your hosts, including CPU class, vendor class and ' +
          'other notes.'),
      documentation: {},
      action: {
        url: '/models/new',
        title: 'Create Hardware Model',
      },
    };
    const sortController = {
      apply: (by, order) => {
        const uri = new URI(window.location.href);
        uri.setSearch('order', `${by} ${order}`);
        this.props.getTableItems('api/models', uri.query(true), 'models');
      },
      property: this.props.sortBy,
      order: this.props.sortOrder,
    };

    const schema = [
      {
        property: 'name',
        header: {
          label: __('Name'),
          props: {
            className: 'col-md-4',
            sort: true,
            sortDirection: '',
          },
          formatters: [sortableHeaderFormatter(sortController), headerFormatterWithProps],
        },
        cell: {
          formatters: [nameCellFormatter('models'), ellipsisCellFormatter],
        },
      },
      {
        property: 'vendor_class',
        header: {
          label: __('Vendor Class'),
          props: {
            className: 'col-md-3',
            sort: true,
            sortDirection: '',
          },
          formatters: [sortableHeaderFormatter(sortController), headerFormatterWithProps],
        },
        cell: {
          formatters: [ellipsisCellFormatter],
        },
      },
      {
        property: 'hardware_model',
        header: {
          label: __('Hardware Model'),
          props: {
            className: 'col-md-3',
            sort: true,
            sortDirection: '',
          },
          formatters: [sortableHeaderFormatter(sortController), headerFormatterWithProps],
        },
        cell: {
          formatters: [ellipsisCellFormatter],
        },
      },
      {
        property: 'hosts_count',
        header: {
          label: __('Hosts'),
          props: {
            className: 'col-md-1',
          },
          formatters: [headerFormatterWithProps],
        },
        cell: {
          props: {
            align: 'right',
          },
          formatters: [
            hostsCountCellFormatter('model'),
            cellFormatterWithProps,
          ],
        },
      },
      {
        property: 'actions',
        header: {
          label: __('Actions'),
          formatters: [headerFormatterWithProps],
        },
        cell: {
          formatters: [deleteActionCellFormatter('models'), cellFormatter],
        },
      },
    ];

    // do not render anything if the user entered a search query
    // and there were no results. Rails will take care of it for now.
    // TODO(bshuster): remove this once pagination is moved to
    // react too.
    if (this.props.search && !this.props.results.length) {
      return null;
    }
    return (
      <Loader status={this.props.status}>
        {[
          <Table
            key="models-table"
            columns={schema}
            emptyState={emptyState}
            rows={this.props.results}
          />,
          <MessageBox
            key="models-table-error"
            icontype="error-circle-o"
            msg="Oh no! Could not receive data"
          />,
        ]}
      </Loader>
    );
  }
}

ModelsTable.propTypes = {
  results: PropTypes.array.isRequired,
  search: PropTypes.string,
  getTableItems: PropTypes.func.isRequired,
};

export default ModelsTable;
