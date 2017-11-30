class DocumentsController < ApplicationController
    before_action :authorize

    def new
        @document = Document.new
        @classroom = Classroom.find(params[:classroom_id])
        if @classroom.admin_id != current_user.id
            redirect_to root_path
        end

    end
    def create
        document = Document.new(document_params)
        document.classroom_id = params[:classroom_id]
        document.save
        redirect_to classroom_path(document.classroom_id)
    end

    def show
        @classroom = Classroom.find(params[:classroom_id])
        if not @classroom.users.include?(current_user)
            redirect_to root_path
        end
        if @classroom.documents.exists?(id: params[:id])
            @document = @classroom.documents.find(params[:id])
        else
            redirect_to root_path
        end
    end
    private
    def document_params
        params.require(:document).permit(:name, :body)
    end
end
