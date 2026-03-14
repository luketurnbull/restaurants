import { RestaurantCard } from '@/components/restaurant-card'
import type { Restaurant } from '@/types/restaurant'

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.objectId} restaurant={restaurant} />
      ))}
    </div>
  )
}
