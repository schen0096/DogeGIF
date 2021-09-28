Rails.application.routes.draw do

  resources :comments, only: [:index, :destroy, :update, :create]
  resources :dog_gifs, only: [:index, :show, :create]
  resources :users, only: [:create, :index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/signup", to: "users#create"
  get "/auth", to: "users#auth_show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/sidebarinfo", to: "sessions#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end