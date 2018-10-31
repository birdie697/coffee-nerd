Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :techniques, only: [:index] do
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :coffees, only: [:index] do
      end
    end
  end

get '*path', to: 'homes#index'

end
