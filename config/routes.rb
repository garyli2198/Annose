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
      get :created # gets classes created by current user
      get :following # gets classes that the user is in but not admin
      get :search
    end
    resources :documents
  end
  # pages
  root 'pages#home'
  # home should redirect to dashboard if the user is logged in.
  get '/dashboard', to: 'pages#dashboard' 
end
