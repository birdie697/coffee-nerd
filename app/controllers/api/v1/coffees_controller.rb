class Api::V1::CoffeesController < ApplicationController
  def index
    coffees = Coffee.all
  end
end
