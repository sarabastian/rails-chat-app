class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :receiver_id, :messages

  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"
  has_many :messages, -> { order(created_at: :asc) }, dependent: :destroy
end
