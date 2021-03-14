class Api::V1::WholesalersController < ApplicationController
  before_action :authenticate_api_v1_wholesaler!
  before_action :current_api_v1_wholesaler
  before_action :ensure_correct_wholesaler
  
def show
  @items = current_api_v1_wholesaler.items
end

def edit
  @wholesaler = Wholesaler.find(params[:id])
  respond_to do | format |
    format.json 
  end
end

private

def ensure_correct_wholesaler
  @wholesaler = Wholesaler.find(params[:id])
  if @wholesaler.id != @current_api_v1_wholesaler.id
  redirect_to  new_api_v1_wholesaler_session_url
  end
end

end