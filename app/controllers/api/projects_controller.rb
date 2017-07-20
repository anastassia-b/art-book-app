class Api::ProjectsController < ApplicationController

  def index
    # cloud_name = ENV['CLOUD_NAME']
    # # upload_preset = ENV['UPLOAD_PRESET']
    # upload_preset = Figaro.env.UPLOAD_PRESET
    # puts "API KEYS: #{cloud_name} #{upload_preset}"
    @projects = Project.all
    render :index
  end

  def show
    @project = Project.find(params[:id])
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :thumbnail_url, :user_id)
  end

end
