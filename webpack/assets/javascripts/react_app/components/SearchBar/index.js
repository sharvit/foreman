import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../AutoComplete/AutoCompleteActions';
import reducer from '../AutoComplete/AutoCompleteReducer';
import SearchBar from './SearchBar';

const mapStateToProps = ({
  autocomplete: {
    results, searchQuery, status, queryCache, error,
  },
}) => ({
  results, searchQuery, status, queryCache, error,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const reducers = { autocomplete: reducer };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
