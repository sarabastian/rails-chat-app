class Api::V1::MessagesController < ApplicationController

    def index
        messages = Message.all 
        render json: messages
    end

    def show
        # conversation = Conversation.find(params[:conversation_id])
        # render json: conversation
        message = Message.find(params[:message_id])
        render json: message
    end

    def create
        # conversation = Conversation.find(params[:conversation_id])
        message = Message.create(message_params)
        render json: message
    end

    private
    def message_params
        params.require(:message).permit(:body, :conversation_id, :user_id)
    end

end
