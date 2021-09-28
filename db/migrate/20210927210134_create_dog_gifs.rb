class CreateDogGifs < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_gifs do |t|
      t.string :img
      t.string :tag

      t.timestamps
    end
  end
end
