class Api::V1::TechniquesController < ApplicationController
  def index
    techniques = Technique.all
  end
end
