class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?
  # CSRFチェックをしない
  skip_before_action :verify_authenticity_token, if: :devise_controller?, raise: false

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :company_name, :president_name, :industry, :post_code, :city, :address, :phone_number])
  end

end
