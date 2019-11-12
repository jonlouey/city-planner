class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all 
        render json: @users, status: :ok
    end 

    def show 
        @user = User.find(params[:id])
        render json: @user, status: :ok
    end

    # def create
    #     user = User.new(
    #       username: params[:username],
    #       password: params[:password]
    #     )
    
    #     if user.save
    #       jwt = encode_token(user.id)
    
    #       render json: {user: UserSerializer.new(user), jwt: jwt}
    #     else
    #       render json: {errors: user.errors.full_messages}
    #     end
    #   end 

    private 

    def user_params
        params.require(:user).permit(:username, :password_digest)
    end 
end
