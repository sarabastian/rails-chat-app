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
    conversation = Conversation.create(conversation_params)

    render json: conversation
  end

  private

  def conversation_params
    params.require(:conversation).permit(:sender_id, :receiver_id)
  end
end
