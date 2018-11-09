Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :techniques, only: [:index]
      resources :coffees, only: [:index, :create]
      resources :users, only: [:index]
      resources :preparations, only: [:index, :create]
    end
  end

resources :users, only: [:index]

resources :nerds, only: [:index]
resources :supports, only: [:index]
resources :ratios, only: [:index]
resources :grinds, only: [:index]

get '*path', to: 'users#index'

end
