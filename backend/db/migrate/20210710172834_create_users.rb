class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :full_name
      t.boolean :patient 
      t.boolean :patient_partner

      t.timestamps
    end
  end
end
