class Api::ProjectsController < ApplicationController

  def index
    cloud_name = ENV['CLOUD_NAME']
    # upload_preset = ENV['UPLOAD_PRESET']
    # need to make request from frontend.
    upload_preset = Figaro.env.UPLOAD_PRESET
    puts "API KEYS: #{cloud_name} #{upload_preset}"
    @projects = Project.all
    render :index
  end
end
