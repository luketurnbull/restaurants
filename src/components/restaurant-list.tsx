import { RestaurantCard } from '@/components/restaurant-card'
import { RestaurantCardSkeleton } from '@/components/restaurant-card-skeleton'
import type { Restaurant } from '@/types/restaurant'

interface RestaurantListProps {
  restaurants?: Restaurant[]
  loading?: boolean
}

export function RestaurantList({ restaurants, loading }: RestaurantListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {loading
        ? Array.from({ length: 6 }, (_, i) => (
            <RestaurantCardSkeleton key={i} />
          ))
        : restaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant.objectId} restaurant={restaurant} />
          ))}
    </div>
  )
}
