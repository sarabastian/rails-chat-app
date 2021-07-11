class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :patient, :patient_partner

  

  has_many :messages
  has_many :received_conversations, class_name: 'Conversation', foreign_key: 'receiver_id'
  has_many :sent_conversations, class_name: 'Conversation', foreign_key: 'sender_id'

  # has_many :messages
end
