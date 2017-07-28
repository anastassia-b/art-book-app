class Api::CommentsController < ApplicationController
  def index
    if params[:project_id]
      @comments = Project.find(params[:project_id]).comments
    else
      @comments = Comment.all
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render json: @comment
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :project_id)
  end
end
