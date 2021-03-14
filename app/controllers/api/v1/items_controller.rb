class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_api_v1_wholesaler!
  before_action :ensure_correct_wholesaler,{only: [:edit,:update,:destroy]}

    def index
      render json: Item.all, methods: [:image_url]
    end

    def create
      item = current_api_v1_wholesaler.items.build(item_params)
      if item.save
        render json: item, methods: [:image_url]
      else
        render json: item.errors, status: 422
      end
    end

    def edit
      @item = Item.find(params[:id])
    end

    def update
      @item = Item.find(params[:id])
      if @item.update(item_params)
        head :no_content
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @item = Item.find(params[:id])
      if @item.destroy
        head :no_content
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end

    private

    def item_params
      params.permit(:maker,:name, :genre, :quantity, :condition, :price, :detail, :image)
    end

    def ensure_correct_wholesaler
      @item = Item.find_by(id: params[:id])
      if @item.wholesaler_id != @current_api_v1_wholesaler.id
        debugger
      redirect_to root_url
      end
    end

end
