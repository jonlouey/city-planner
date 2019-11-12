class TripSite < ApplicationRecord
  belongs_to :trip
  belongs_to :site
end
