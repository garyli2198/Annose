class PagesController < ApplicationController
	def home
        if current_user
            redirect_to classrooms_path
        end
	end
end
