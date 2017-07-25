class Api::ImagesController < ApplicationController
  def index
    if params[:project_id]
      @images = Project.find(params[:project_id]).images
    elsif params[:user_id]
      @images = User.find(params[:user_id]).images
    else
      @images = Image.all
    end
  end

  def show
    @image = Image.find(params[:id])
  end

  private

  def image_params
    params.require(:image).permit(:img_url, :caption, :project_id, :user_id)
  end
end
