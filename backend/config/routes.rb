Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, :conversations, :messages
    end
  end
end
