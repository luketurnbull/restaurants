import { createFileRoute } from '@tanstack/react-router'
import { useRestaurants } from '@/hooks/use-restaurants'
import { RestaurantList } from '@/components/restaurant-list'

export const Route = createFileRoute('/')(
  {
  component: Index,
})

function Index() {
  const { data, isPending, isError, error } = useRestaurants()

  if (isPending) return <div className="p-4">Loading...</div>
  if (isError) return <div className="p-4">Error: {error.message}</div>

  return (
    <div className="mx-auto max-w-6xl p-4">
      <RestaurantList restaurants={data.restaurants} />
    </div>
  )
}
