import { Clock, MapPin } from 'lucide-react'
import type { Restaurant } from '@/types/restaurant'

interface RestaurantDetailInfoProps {
  restaurant: Restaurant
}

function Cuisines({ cuisines }: { cuisines: string[] }) {
  if (!cuisines.length) return null

  return (
    <p className="text-sm text-muted-foreground sm:text-center">
      {cuisines.join(' · ')} · $
    </p>
  )
}

function OpeningHours({ open, close }: { open: string; close: string }) {
  return (
    <div className="flex items-center sm:justify-center gap-2 text-sm text-muted-foreground">
      <Clock className="size-4 shrink-0" />
      <span>
        Hours: {open} - {close}
      </span>
    </div>
  )
}

function Address({ address1, suburb }: { address1: string; suburb: string }) {
  return (
    <div className="flex items-center sm:justify-center gap-2 text-sm text-muted-foreground">
      <MapPin className="size-4 shrink-0" />
      <span>
        {address1} {suburb}
      </span>
    </div>
  )
}

export function RestaurantDetailInfo({ restaurant }: RestaurantDetailInfoProps) {
  return (
    <div className="px-4 pt-5 space-y-3 sm:text-center">
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <Cuisines cuisines={restaurant.cuisines} />
      <OpeningHours open={restaurant.open} close={restaurant.close} />
      <Address address1={restaurant.address1} suburb={restaurant.suburb} />
    </div>
  )
}
