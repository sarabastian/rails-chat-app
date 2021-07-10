class Api::V1::MessagesController < ApplicationController

    def index
        messages = Message.all 
        render json: messages
    end

    def show
        conversation = Conversation.find(params[:conversation_id])
        render json: conversation
    end

    def create
        conversation = Conversation.find(params[:conversation_id])

        message = conversation.messages.create(message_params)
        render json: message
    end

    private
    def message_params
        params.require(:message).permit(:body, :user_id)
    end

end
