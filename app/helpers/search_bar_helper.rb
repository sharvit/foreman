module SearchBarHelper
  def mount_search_bar(id)
    mount_react_component('SearchBar', id, {
      controller: auto_complete_controller_name,
      autocomplete: {
        url:  "#{auto_complete_controller_name}/auto_complete_search?search=",
        searchQuery: request.query_parameters['search']
      },
      bookmarks: {
        url: api_bookmarks_path,
        canCreate: authorizer.can?(:create_bookmarks),
        documentationUrl: documentation_url("4.1.5Searching")
      }
    }.to_json)
  end
end
