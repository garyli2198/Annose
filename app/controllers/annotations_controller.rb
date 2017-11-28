class AnnotationsController < ApplicationController
    def create
        annotation = Annotation.new(body: params[:body],
                                  user_id: params[:user_id],
                                  document_id: params[:document_id],
                                  start_index: params[:start_index],
                                  end_index: params[:end_index],)
        annotation.save
    end
end
