import { createFileRoute } from '@tanstack/react-router'
import { useRestaurants } from '@/hooks/use-restaurants'

export const Route = createFileRoute('/restaurant/$slug')({
  component: RestaurantDetail,
})

function RestaurantDetail() {
  const { slug } = Route.useParams()
  const { data, isPending, isError, error } = useRestaurants()

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  const restaurant = data.bySlug[slug]
  if (!restaurant) return <div>Restaurant not found</div>

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
    </div>
  )
}
