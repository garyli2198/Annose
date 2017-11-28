class DocumentsController < ApplicationController
    def show
        @classroom = Classroom.find(params[:classroom_id])
        if @classroom.documents.exists?(id: params[:id])
            @document = @classroom.documents.find(params[:id])
        else
            redirect_to root_path
        end
    end
end
