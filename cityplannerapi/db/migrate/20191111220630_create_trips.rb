class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :start_date
      t.string :end_date
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
