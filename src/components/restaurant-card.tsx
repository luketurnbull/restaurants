import { Link } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { RestaurantImage } from '@/components/restaurant-image'
import { DealBadge } from '@/components/deal-badge'
import { RestaurantInfo } from '@/components/restaurant-info'
import type { Restaurant } from '@/types/restaurant'

function getBestDeal(restaurant: Restaurant) {
  if (!restaurant.deals.length) return null
  return restaurant.deals.reduce((best, deal) =>
    Number(deal.discount) > Number(best.discount) ? deal : best,
  )
}

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const bestDeal = getBestDeal(restaurant)

  return (
    <Link to="/restaurant/$slug" params={{ slug: restaurant.slug }} className="block">
      <Card className="gap-0 overflow-hidden rounded-xl py-0 transition-shadow duration-200 hover:shadow-lg">
        <div className="relative overflow-hidden rounded-xl">
          <RestaurantImage
            src={restaurant.imageLink}
            alt={restaurant.name}
            className="rounded-xl group-hover/card:scale-105"
          />
          {bestDeal && (
            <DealBadge deal={bestDeal} restaurantClose={restaurant.close} />
          )}
        </div>
        <RestaurantInfo restaurant={restaurant} />
      </Card>
    </Link>
  )
}
