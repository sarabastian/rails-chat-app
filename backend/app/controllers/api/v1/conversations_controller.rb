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
        if Conversation.between(params[:patient_id], params[:patient_partner_id]).present?
            conversation = Conversation.between(params[:patient_id], params[:patient_partner_id]).first
            render json: conversation
        else
            conversation = Conversation.create(conversation_params)
            render json: conversation

        end
    end

    private
    def conversation_params
        params.permit(:patient_id, :patient_partner_id)
    end
end
