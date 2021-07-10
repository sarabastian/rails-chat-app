class ConversationSerializer < ActiveModel::Serializer
  attributes :id

  has_many :messages
  has_many :patients, through: :messages, source: :user
  has_many :patient_partners, through: :messages, source: :user
end
