import { Link } from '@tanstack/react-router'
import { Heart } from 'lucide-react'
import { RestaurantImage } from '@/components/restaurant-image'
import { createRestaurantSlug } from '@/lib/utils'
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
  const slug = createRestaurantSlug(restaurant.name, restaurant.objectId)

  return (
    <Link to="/restaurant/$slug" params={{ slug }} className="block">
      <div className="overflow-hidden rounded-xl bg-card shadow-sm">
        <div className="relative">
          <RestaurantImage
            src={restaurant.imageLink}
            alt={restaurant.name}
            className="rounded-t-xl"
          />
          {bestDeal && (
            <div className="absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground leading-tight">
              <div>{bestDeal.discount}% off</div>
              {bestDeal.dineIn === 'true' && (
                <div className="text-[10px] font-normal opacity-90">
                  dine in before {bestDeal.close ?? restaurant.close}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-1 p-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold leading-tight">{restaurant.name}</h3>
            <Heart className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
          </div>

          <p className="text-sm text-muted-foreground">
            0.5km Away, {restaurant.suburb}
          </p>

          {restaurant.cuisines.length > 0 && (
            <p className="text-sm text-muted-foreground">
              {restaurant.cuisines.join(', ')}
            </p>
          )}

          <p className="text-sm text-muted-foreground">
            {['Dine In', 'Takeaway', 'Order Online'].join(' \u00b7 ')}
          </p>
        </div>
      </div>
    </Link>
  )
}
