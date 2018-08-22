require 'integration_test_helper'

class AuditIntegrationTest < ActionDispatch::IntegrationTest
  test "audit content" do
    visit audits_path
    assert has_content?("updated Host"), "expected 'updated Host' but it doesn't exist"
  end
end
