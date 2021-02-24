Rails.application.routes.draw do
  # mount_devise_token_auth_for 'Wholesaler', at: 'auth'
  root to: 'page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      mount_devise_token_auth_for 'Wholesaler', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations',
          format: :json
     }
     resources :posts, only: [:index, :create, :destroy]
    end
  end
end
