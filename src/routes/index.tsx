import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'
import { useRestaurants } from '@/hooks/use-restaurants'
import { RestaurantCard } from '@/components/restaurant-card'
import type { Restaurant } from '@/types/restaurant'

export const Route = createFileRoute('/')({
  component: Index,
})

function getBestDiscount(r: Restaurant): number {
  return Math.max(0, ...r.deals.map((d) => Number(d.discount)))
}

function Index() {
  const { data, isPending, isError, error } = useRestaurants()

  const sorted = useMemo(() => {
    if (!data) return []
    return [...data.restaurants].sort(
      (a, b) => getBestDiscount(b) - getBestDiscount(a),
    )
  }, [data])

  if (isPending) return <div className="p-4">Loading...</div>
  if (isError) return <div className="p-4">Error: {error.message}</div>

  return (
    <div className="mx-auto max-w-md space-y-6 p-4">
      {sorted.map((restaurant) => (
        <RestaurantCard key={restaurant.objectId} restaurant={restaurant} />
      ))}
    </div>
  )
}
