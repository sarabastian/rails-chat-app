class Api::V1::ConversationsController < ApplicationController

    def index
      
        conversations = Conversation.all
        render json: conversations

    end

    def show
        conversation = Conversation.find(params[:conversation_id])
        render json: conversation
    end

    def create 
        # if Conversation.between(params[:sender_id], params[:receiver_id]).present? 
        #     conversation = Conversation.between(params[:sender_id], params[:receiver_id]).first
        #  else
        conversation = Conversation.create(conversation_params)
        #  end
  
        render json: conversation


    end

    private
    def conversation_params
        params.require(:conversation).permit(:sender_id, :receiver_id)
    end
end
