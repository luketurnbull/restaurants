import { RestaurantCard } from '@/components/restaurant-card'
import type { Restaurant } from '@/types/restaurant'

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <div className="space-y-6">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.objectId} restaurant={restaurant} />
      ))}
    </div>
  )
}
