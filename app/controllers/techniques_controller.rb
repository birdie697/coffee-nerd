class TechniquesController < ApplicationController
  def index
    @techniques = Technique.all
  end
end
