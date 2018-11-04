Rails.application.routes.draw do
  root 'homes#index'
  # get '/api/vi/preparations/', to: 'api/v1/preparations#index'
  # post '/api/vi/preparations/', to: 'api/v1/preparations#create'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :techniques, only: [:index]
      resources :coffees, only: [:index]
      resources :users, only: [:index]
      resources :preparations, only: [:index, :create]
    end
  end

get '*path', to: 'homes#index'

end
