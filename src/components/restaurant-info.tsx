import { Heart } from 'lucide-react'
import { CardContent } from '@/components/ui/card'
import type { Restaurant } from '@/types/restaurant'

function RestaurantAddress({ restaurant }: { restaurant: Restaurant }) {
  return (
    <p className="text-sm text-muted-foreground">
      {restaurant.address1}, {restaurant.suburb}
    </p>
  )
}

function RestaurantCuisines({ cuisines }: { cuisines: string[] }) {
  if (cuisines.length === 0) return null
  return (
    <p className="text-xs text-muted-foreground">
      {cuisines.join(', ')}
    </p>
  )
}

function RestaurantDineIn({ restaurant }: { restaurant: Restaurant }) {
  if (!restaurant.deals.some((d) => d.dineIn === 'true')) return null
  return (
    <p className="text-sm text-muted-foreground">Dine In</p>
  )
}

interface RestaurantInfoProps {
  restaurant: Restaurant
}

export function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  return (
    <CardContent className="space-y-1 py-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold leading-tight">{restaurant.name}</h3>
        <Heart className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
      </div>
      <RestaurantAddress restaurant={restaurant} />
      <RestaurantCuisines cuisines={restaurant.cuisines} />
      <RestaurantDineIn restaurant={restaurant} />
    </CardContent>
  )
}
