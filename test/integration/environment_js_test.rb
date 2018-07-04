require 'integration_test_helper'

class EnvironmentIntegrationTest < IntegrationTestWithJavascript
  test "index page" do
    assert_index_page(environments_path, "Environments", "Create Puppet Environment")
  end
end
