class Api::V1::CoffeesController < ApplicationController
  def index
    render json: Coffee.order(name: :asc)
  end
end
