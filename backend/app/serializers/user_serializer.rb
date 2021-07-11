class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :patient, :patient_partner

  
  has_many :messages
  has_many :conversations, through: :messages

  # has_many :messages
end
