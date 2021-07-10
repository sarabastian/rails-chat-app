class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.integer :patient_id
      t.integer :patient_partner_id

      t.timestamps
    end
  end
end
