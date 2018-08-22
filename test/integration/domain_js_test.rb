require 'integration_test_helper'

class DomainIntegrationTest < IntegrationTestWithJavascript
  test "index page" do
    assert_index_page(domains_path, "Domains", "Create Domain")
  end
end
