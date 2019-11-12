class Api::V1::SitesController < ApplicationController
    def index
        @sites = Site.all 
        render json: @sites, status: :ok
    end 

    def show 
        @site = Site.find(params[:id])
        render json: @site, status: :ok
    end

    def create
        @site = Site.create(site_params)
        render json: @site, status: :ok
    end 

    private 

    def site_params
        params.require(:user).permit(:name, :location, :description)
    end 
end
