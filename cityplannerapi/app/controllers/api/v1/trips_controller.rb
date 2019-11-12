class Api::V1::TripsController < ApplicationController
    def index
        @trips = Trip.all 
        render json: @trips, status: :ok
    end 

    def show 
        @trip = Trip.find(params[:id])
        render json: @trip, status: :ok
    end

    def create
        @trip = Trip.create(trip_params)
        render json: @trip, status: :ok
    end 

    private 

    def trip_params
        params.require(:user).permit(:name, :start_date, :end_date, :user_id)
    end 
end
