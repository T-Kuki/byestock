class Api::V1::ItemsController < ApiController
    def index
      render json: Item.all, methods: [:image_url] # ここを変更
    end

    def create
      item = Item.new(item_params)
      if item.save
        render json: item, methods: [:image_url] # ここを変更
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
      params.permit(:title, :image)
    end

end
