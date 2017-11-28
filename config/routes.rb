Rails.application.routes.draw do
  
  # login and logout
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'

  # users
  resources :users

  # classroooms
  resources :classrooms do 
    collection do
      get :created
      get :following
      get :search
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#home'
end
