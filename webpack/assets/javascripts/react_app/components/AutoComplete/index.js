import React from 'react';
import PropTypes from 'prop-types';
import { TypeAheadSelect } from 'patternfly-react';
import { bindMethods, debounceMethods, noop } from '../../common/helpers';
import AutoCompleteMenu from './components/AutoCompleteMenu';
import AutoCompleteSearchButton from './components/AutoCompleteSearchButton';
import AutoCompleteClearButton from './components/AutoCompleteClearButton';
import AutoCompleteFocusShortcut from './components/AutoCompleteFocusShortcut';
import AutoCompleteError from './components/AutoCompleteError';
import { STATUS } from '../../constants';
import { TRIGGERS } from './AutoCompleteConstants';
import './auto-complete.scss';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this, ['handleClear', 'handleInputChange', 'handleResultsChange', 'handleInputFocus', 'getResults', 'keyPressHandler', 'undableHTMLAutocomplete']);
    debounceMethods(this, 250, ['handleInputChange', 'handleLoading']);
    debounceMethods(this, 125, ['handleInputFocus']);
    this._typeahead = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keypress', this.keyPressHandler);
    const {
      controller, initialQuery, initialUpdate, queryCache,
    } = this.props;
    initialUpdate(initialQuery, controller, queryCache);
    this.undableHTMLAutocomplete();
  }

  keyPressHandler(e) {
    const { keyCode } = e;
    const instance = this._typeahead.current.getInstance();
    // If Enter
    if (keyCode === 13) {
      this.props.handleSearch();
    }
    // If Forward-slash
    if (keyCode === 47 && !instance.state.showMenu) {
      e.preventDefault();
      instance.focus();
    }
  }

  undableHTMLAutocomplete() {
    const input = this._typeahead.current &&
      this._typeahead.current.getInstance().getInput();
    if (input) {
      input.autocomplete = 'off';
    }
  }

  getResults(query, trigger) {
    const {
      getResults, controller, url, queryCache,
    } = this.props;
    getResults(url, query, controller, trigger, queryCache);
  }

  handleInputFocus({ target: { value } }) {
    // Only on initial focus.
    if (this.props.results.length === 0) {
      this.getResults(value, TRIGGERS.INPUT_FOCUS);
    }
  }

  handleInputChange(query) {
    this.getResults(query, TRIGGERS.INPUT_CHANGE);
  }

  // Gets the first result from an array of selected results.
  handleResultsChange({ 0: result }) {
    if (!result) {
      return;
    }
    this.getResults(result, TRIGGERS.ITEM_SELECT);
    /**
       *  HACK: I had no choice but to call to an inner function,
       * due to lack of design in react-bootstrap-typeahead.
        */
    this._typeahead.current.getInstance()._showMenu();
  }

  handleClear() {
    this._typeahead.current.getInstance().clear();
    this.getResults('', TRIGGERS.INPUT_CLEAR);
  }

  handleLoading() {
    return this.props.status === STATUS.PENDING;
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.keyPressHandler);
    const { resetData, controller } = this.props;
    resetData(controller);
  }

  render() {
    return (
      <div>
        <TypeAheadSelect
          ref={this._typeahead}
          defaultInputValue={this.props.initialQuery}
          options={this.props.results}
          isLoading={this.handleLoading()}
          onInputChange={this.handleInputChange}
          onChange={this.handleResultsChange}
          onFocus={this.handleInputFocus}
          emptyLabel={null}
          placeholder={__('Filter ...')}
          renderMenu={(results, menuProps) => <AutoCompleteMenu {...{ results, menuProps }} />}
          inputProps={{ id: 'search', spellCheck: 'false' }}
        />
        <AutoCompleteFocusShortcut />
        <AutoCompleteClearButton onClear={this.handleClear} />
        <AutoCompleteError error={this.props.error}/>
      </div>
    );
  }
}

AutoComplete.propTypes = {
  results: PropTypes.array,
  searchQuery: PropTypes.string,
  initialQuery: PropTypes.string,
  status: PropTypes.string,
  controller: PropTypes.string,
  url: PropTypes.string,
  getResults: PropTypes.func,
  resetData: PropTypes.func,
  initialUpdate: PropTypes.func,
};

AutoComplete.defaultProps = {
  results: [],
  searchQuery: '',
  initialQuery: '',
  status: null,
  controller: null,
  url: null,
  getResults: noop,
  resetData: noop,
  initialUpdate: noop,
};

AutoComplete.SearchButton = AutoCompleteSearchButton;
AutoComplete.Error = AutoCompleteError;

export default AutoComplete;
