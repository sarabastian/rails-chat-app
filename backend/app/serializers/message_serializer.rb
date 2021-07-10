class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :conversation_id, :user

  belongs_to :conversation
  belongs_to :user
end
