class Api::V1::DonutsController < ApplicationController
  def index
    shop = Shop.find(params[:shop_id])
    render json: shop.donuts, adapter: :json
  end

  def show
    render json: Donut.find(params[:id])
  end
end
