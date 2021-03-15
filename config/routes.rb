Rails.application.routes.draw do
  # mount_devise_token_auth_for 'Wholesaler', at: 'auth'
  root to: 'page#index'
  get '/login', to: 'page#index'
  get '/wholesaler/login', to: 'page#index'
  get '/contractor/login', to: 'page#index'
  get '/wholesaler/mypage/items', to: 'page#index'
  get '/wholesaler/mypage/items/new', to: 'page#index'
  get '/wholesaler/mypage/items/:id/edit', to: 'page#index'
  get '/wholesaler/mypage/received_order', to: 'page#index'
  get '/wholesaler/mypage/profile', to: 'page#index'
  get '/wholesaler/mypage/email', to: 'page#index'
  get '/wholesaler/mypage/password', to: 'page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      mount_devise_token_auth_for 'Wholesaler', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations',
          format: :json
     }
     resources :wholesalers, :only => [:show,:edit] do
      resources :items, only: [:index, :create,:edit,:update, :destroy]
     end
    end
  end
end
