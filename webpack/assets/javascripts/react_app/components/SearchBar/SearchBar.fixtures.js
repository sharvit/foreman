export const SearchBarProps = {
  data: {
    autocomplete: {
      url: 'models/auto_complete_search?search=',
      searchQuery: null,
    },
    bookmarks: {
      url: '/api/bookmarks',
      canCreate: true,
      documentationUrl: 'http://www.theforeman.org/manuals/1.19/index.html#4.1.5Searching',
    },
    controller: 'models',
  },

};
