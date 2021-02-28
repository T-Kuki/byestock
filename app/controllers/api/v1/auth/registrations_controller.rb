class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  include ActionController::MimeResponds

  private

  # :company( 企業名 )を追加できるようにpravateメソッドに修正を加える
  def sign_up_params
    params.permit(:name, :email, :wholesaler_id, :password, :password_confirmation)
  end

  def account_update_params
    params.permit(:name, :email)
  end
end
