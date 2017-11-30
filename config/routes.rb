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
      get :search
    end
    resources :documents
  end
  resources :annotations
  # pages
  root 'pages#home'
  # home should redirect to dashboard if the user is logged in.
  get '/dashboard', to: 'pages#dashboard' 
end
