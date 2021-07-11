class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.string :subject_line

      t.timestamps
    end
  end
end
