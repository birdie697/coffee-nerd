class Api::V1::TechniquesController < ApplicationController
  def index
    render json: Technique.order(name: :asc)
  end
end
