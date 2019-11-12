require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get api/v1/user" do
    get user_api/v1/user_url
    assert_response :success
  end

end
