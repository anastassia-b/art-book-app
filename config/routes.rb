Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:index, :show, :create]
    resources :images, only: [:index, :show]
    resources :likes, only: [:create]
  end

  delete '/api/likes', :to => 'api/likes#destroy'
end
