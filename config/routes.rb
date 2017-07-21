Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:index, :show, :create]
    resources :images, only: [:index, :show]
  end
end
