class Conversation < ApplicationRecord
    # belongs_to :patient, foreign_key: :patient_id, class_name: :User
    # belongs_to :patient_partner, foreign_key: :patient_partner_id, class_name: :User

    has_many :messages
    has_many :patients, through: :messages, source: :user
    has_many :patient_partners, through: :messages, source: :user
end
