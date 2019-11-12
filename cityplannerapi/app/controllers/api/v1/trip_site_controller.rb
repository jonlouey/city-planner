class Api::V1::TripSiteController < ApplicationController
    def index
        @trip_sites = TripSite.all 
        render json: @trip_sites, status: :ok
    end 

    def show 
        @trip_sites = TripSite.find(params[:id])
        render json: @trip_site, status: :ok
    end

    def create
        @trip_sites = TripSite.create(trip_site_params)
        render json: @trip_site, status: :ok
    end 

    private 

    def trip_site_params
        params.require(:user).permit(:trip_id, :site_id)
    end
end
