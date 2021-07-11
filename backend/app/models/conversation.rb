class Conversation < ApplicationRecord
    # belongs_to :user
    belongs_to :sender, class_name: 'User'
    belongs_to :receiver, class_name: 'User'
    has_many :messages, -> { order(created_at: :asc) }, dependent: :destroy
    # has_many :patients, through: :messages, source: :user
    # has_many :patient_partners, through: :messages, source: :user
end
