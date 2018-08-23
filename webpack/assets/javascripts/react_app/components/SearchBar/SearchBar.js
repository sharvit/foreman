import React from 'react';
import URI from 'urijs';
import PropTypes from 'prop-types';
import AutoComplete from '../AutoComplete';
import Bookmarks from '../bookmarks';
import { noop } from '../../common/helpers';

const handleSearch = (searchQuery, match, history) => {
  const data = { ...match.params, search: searchQuery.trim(), page: 1 };

  history.push({
    pathname: match.path,
    search: URI.buildQuery(data, true),
  });
};

class SearchBar extends React.Component {
  render() {
    const {
      history,
      match,
      searchQuery,
      results,
      status,
      queryCache,
      resetData,
      getResults,
      initialUpdate,
      error,
      data: {
        autocomplete,
        controller,
        bookmarks,
      },
    } = this.props;

    return (
      <div className="input-group">
          <AutoComplete
            controller={controller}
            searchQuery={searchQuery}
            initialQuery={autocomplete.searchQuery || ''}
            status={status}
            results={results}
            url={autocomplete.url}
            queryCache={queryCache}
            resetData={resetData}
            getResults={getResults}
            initialUpdate={initialUpdate}
            handleSearch={() => handleSearch(searchQuery, match, history)}
            error={error}
          />
          <div className="input-group-btn">
            <AutoComplete.SearchButton onClick={() => handleSearch(searchQuery, match, history)}/>
            <Bookmarks data={ { ...bookmarks, controller, searchQuery } } />
          </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  results: PropTypes.array,
  status: PropTypes.string,
  queryCache: PropTypes.object,
  resetData: PropTypes.func,
  getResults: PropTypes.func,
  initialUpdate: PropTypes.func,
  data: PropTypes.shape({
    autocomplete: PropTypes.shape({
      searchQuery: PropTypes.string,
      url: PropTypes.string,
    }),
    controller: PropTypes.string,
    bookmarks: PropTypes.shape({ ...Bookmarks.propTypes }),
  }),
};

SearchBar.defaultProps = {
  searchQuery: null,
  results: [],
  status: null,
  queryCache: {},
  resetData: noop,
  getResults: noop,
  initialUpdate: noop,
  data: {
    autocomplete: {
      searchQuery: null,
      url: null,
    },
    controller: null,
    bookmarks: {},
  },
};

export default SearchBar;
