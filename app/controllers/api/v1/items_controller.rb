class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_api_v1_wholesaler!
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

    def destroy
      item = Item.find(params[:id])
      item.destroy!
      render json: item
    end

    private

    def item_params
      params.permit(:maker,:name, :genre, :quantity, :condition, :price, :detail, :image)
    end

end
