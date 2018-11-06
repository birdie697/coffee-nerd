class UsersController < ApplicationController

before_action :authenticate_user!

  def index
    render "users/index"
  end

end
