class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by_id(params[:id])
    # @like = Like.find_by(user_id: like_params[:user_id],
    #                     project_id: like_params[:project_id])
    @like.destroy
    render :show
  end

  # def destroy
  #   @like = Like.find(params[:id])
  #   @project = Project.find(@like.project_id)
  #   if @like.destroy!
  #     render "api/projects/show"
  #   else
  #     render json: ["Un-like failed"], status: 404
  #   end
  # end

  private

  def like_params
    params.require(:like).permit(:user_id, :project_id)
  end
end
