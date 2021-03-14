class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  include ActionController::MimeResponds

  private

  def sign_up_params
    params.permit(:company_name, :president_name, :industry, :post_code, :city, :address, :phone_number,
       :email, :wholesaler_id, :password, :password_confirmation)
  end

  def account_update_params
    params.permit(:email, :company_name, :president_name, :industry, :post_code, :city, :address, :phone_number, :password, :password_confirmation))
  end
end
