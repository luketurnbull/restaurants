import { createFileRoute } from '@tanstack/react-router'
import { useRestaurants } from '@/hooks/use-restaurants'
import { RestaurantCard } from '@/components/restaurant-card'

export const Route = createFileRoute('/')(
  {
  component: Index,
})

function Index() {
  const { data, isPending, isError, error } = useRestaurants()

  if (isPending) return <div className="p-4">Loading...</div>
  if (isError) return <div className="p-4">Error: {error.message}</div>

  return (
    <div className="mx-auto max-w-md space-y-6 p-4">
      {data.restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.objectId} restaurant={restaurant} />
      ))}
    </div>
  )
}
