require 'integration_test_helper'

class ArchitectureIntegrationTest < IntegrationTestWithJavascript
  test "index page" do
    assert_index_page(architectures_path, "Architectures", "Create Architecture")
  end
end
