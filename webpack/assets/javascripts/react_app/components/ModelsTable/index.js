import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModelsTable from './ModelsTable';
import reducer from './ModelsTableReducer';
import * as actions from './ModelsTableActions';

const mapStateToProps = ({ models }) => ({
  perPage: models.perPage,
  search: models.searchQuery,
  results: models.results,
  sortBy: models.sortBy,
  sortOrder: models.sortOrder,
  status: models.status,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const reducers = { models: reducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModelsTable);
