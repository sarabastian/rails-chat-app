class Message < ApplicationRecord
    belongs_to :conversation
    belongs_to :user
    # belongs_to :receiver, class_name: 'User'
    # belongs_to :sender, class_name: 'User'

end
