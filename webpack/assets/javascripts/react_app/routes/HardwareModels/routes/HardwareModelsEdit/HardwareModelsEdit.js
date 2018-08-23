import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../../../../components/HardwareModel/form';
import API from '../../../../API';
import BreadcrumbsBar from '../../../../components/BreadcrumbBar';
import * as HardwareModelActions from './HardwareModelActions';

class HardwareModelsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleBreadcrumbSwitcherItem = this.handleBreadcrumbSwitcherItem.bind(this);
    this.loadData = this.loadData.bind(this);
    this.state = { id: undefined };
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidMount() {
    if (this.props.fields.length === 0) {
      this.loadData();
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.hardwareModelId !== this.props.match.params.hardwareModelId) {
      this.loadData();
    }
  }

  loadData() {
    const currentId = window.location.pathname.split('/')[2];

    API.get(`/api/models/${currentId}`).then(({
      data: {
        name, hardware_model, vendor_class, info, id,
      },
    }) => {
      this.setState({
        id,
        name,
        model: hardware_model,
        vendor: vendor_class,
        information: info,
      });
    });
  }

  handleBreadcrumbSwitcherItem(e, url) {
    this.props.history.push(url);
    e.preventDefault();
  }

  render() {
    const {
      information, name, model, vendor, id,
    } = this.state;

    const currentId = window.location.pathname.split('/')[2];
    const resource = {
      nameField: 'name',
      resourceUrl: 'https://centos7-luna-devel.sharvits-fedora-book.example.com/api/models',
      switcherItemUrl: '/models/:id/edit',
    };

    const header = <BreadcrumbsBar
    onSwitcherItemClick={(e, url) => this.handleBreadcrumbSwitcherItem(e, url)}
    data={{
      isSwitchable: true,
      breadcrumbItems: [
        {
          caption: __('Hardware Models'),
          onClick: () =>
            this.props.history.push('/models'),
        },
        {
          caption: String(name || (this.props.fields && this.props.fields.name)),
        },
      ],
      resource,
    }}
  />;

    if (id) {
      return (
        <div>
          {header}
          <Form
            method="put"
            message={__('Model has been updated !')}
            url={`/api/models/${id}`}
            id={id}
            name={name}
            model={model}
            vendor={vendor}
            information={information}
            routeTo={this.props.history}
          />
        </div>
      );
    }

    if (Object.keys(this.props.fields).length > 0) {
      const {
        fields: { hardware_model, info, vendor_classs },
      } = this.props;

      return (
        <div>
          {header}
          <Form
            method="put"
            message={__('Model has been updated !')}
            url={`/api/models/${currentId}`}
            id={currentId}
            name={this.props.fields.name}
            model={hardware_model}
            vendor={vendor_classs}
            information={info}
            routeTo={this.props.history}
          />
        </div>
      );
    }
    return header;
  }
}

const mapStateToProps = (state, ownProps) => ({
  // TODO #selectors
  fields:
    state.models.results
      .filter(field => field.id == ownProps.match.params.hardwareModelId
        .split('-')[0])[0] || [],
});

export default withRouter(connect(
  mapStateToProps,
  HardwareModelActions,
)(HardwareModelsEdit));
