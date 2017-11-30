class ClassroomsController < ApplicationController
    before_action :authorize
    def index
        render json: Classroom.all
    end

    def show
        @classroom = Classroom.find(params[:id])
        @documents = @classroom.documents
        @document = Document.new
    end
end
