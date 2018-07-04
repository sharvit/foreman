import URI from 'urijs';
import { TRIGGERS } from './AutoCompleteConstants';

export const urlBuilder = (path, searchQuery, trigger) => {
  const loadNextResults = trigger === TRIGGERS.ITEM_SELECT ? '+' : '';
  return `${path}${URI.encodeQuery(searchQuery)}${loadNextResults}`;
};
