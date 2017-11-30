class ClassroomsController < ApplicationController
    before_action :authorize
    def index
        @classrooms = current_user.classrooms
    end
    def join
        current_user.classrooms << Classroom.find_by(key: params[:key])
        redirect_to classrooms_path
    end
    def new
        @classroom = Classroom.new
    end

    def create
        c = Classroom.new(classroom_params)
        c.admin = current_user
        c.users << current_user
        c.save
        c.update(key: c.get_key)
        redirect_to classroom_path(c)
    end

    def show

        @classroom = Classroom.find(params[:id])
        if not @classroom.users.include?(current_user)
            redirect_to root_path
        end
        @documents = @classroom.documents
        @document = Document.new
    end

    private
    def classroom_params
        params.require(:classroom).permit(:name)
    end
end
