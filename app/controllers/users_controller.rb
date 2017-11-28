class UsersController < ApplicationController
	before_action :only_see_own
  skip_before_action :only_see_own, only: [:new, :create]

  def new
    	@user = User.new
	end

	def create
  	@user = User.new(allowed_params)
  	if @user.save
  		  session[:user_id] = @user.id
    		redirect_to root_url, notice: 'Thank you for signing up!'
  	else 
    		render :new
  	end  
	end

  def show
    @user = User.find(params[:id])
  end
  
  def update
      if current_user.update user_params
        redirect_to root_url, notice: 'Password updated!'
      else
        @user = current_user
        render :show
      end
   end

  def destroy
    session[:user_id] = nil    
    User.find(params[:id]).destroy
    redirect_to root_url
  end
    
private
  def only_see_own
    if current_user.nil?
      redirect_to root_url, notice: 'You are not logged in!'
    else
      @user = User.find(params[:id])
      if current_user != @user
        redirect_to root_url, notice: 'You are not allowed access!'
      end
    end
  end

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end
	
  def allowed_params
 		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end
