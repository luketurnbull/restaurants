import { createFileRoute, Link } from '@tanstack/react-router'
import { useRestaurants } from '@/hooks/use-restaurants'
import { createRestaurantSlug } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')(({
  component: Index,
}))

function Index() {
  const { data, isPending, isError, error } = useRestaurants()

  if (isPending) return <div className="p-8">Loading...</div>
  if (isError) return <div className="p-8">Error: {error.message}</div>

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Restaurants</h1>
      <ul className="space-y-2">
        {data.restaurants.map((restaurant) => (
          <li key={restaurant.objectId} className="flex items-center gap-4">
            <span>{restaurant.name}</span>
            <Link
              to="/restaurant/$slug"
              params={{ slug: createRestaurantSlug(restaurant.name, restaurant.objectId) }}
            >
              <Button variant="outline" size="sm">
                View
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
