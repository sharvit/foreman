import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../AutoComplete/AutoCompleteActions';
import reducer from '../AutoComplete/AutoCompleteReducer';
import SearchBar from './SearchBar';

const mapStateToProps = ({
  autocomplete: {
    results, searchQuery, status, queryCache,
  },
}) => ({
  results, searchQuery, status, queryCache,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const reducers = { autocomplete: reducer };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
