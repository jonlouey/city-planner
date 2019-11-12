class CreateSites < ActiveRecord::Migration[6.0]
  def change
    create_table :sites do |t|
      t.string :name
      t.string :location_type
      t.string :location
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
