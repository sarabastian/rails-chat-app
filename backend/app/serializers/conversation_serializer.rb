class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :subject_line

  # belongs_to :user
  has_many :messages
  # has_many :patients, through: :messages, source: :user
  # has_many :patient_partners, through: :messages, source: :user
end
