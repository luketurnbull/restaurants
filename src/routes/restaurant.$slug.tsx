import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useRestaurants } from '@/hooks/use-restaurants'
import { RestaurantImage } from '@/components/restaurant-image'
import { RestaurantDetailInfo } from '@/components/restaurant-detail-info'
import { DealCard } from '@/components/deal-card'
import { ActionRow, ActionItem } from '@/components/action-row'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  UtensilsCrossed,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react'

export const Route = createFileRoute('/restaurant/$slug')({
  component: RestaurantDetail,
})

function RestaurantDetail() {
  const { slug } = Route.useParams()
  const router = useRouter()
  const { data, isPending, isError, error } = useRestaurants()

  if (isPending) return <div className="p-8">Loading...</div>
  if (isError) return <div className="p-8">Error: {error.message}</div>

  const restaurant = data.bySlug[slug]
  if (!restaurant) return <div className="p-8">Restaurant not found</div>

  const sortedDeals = [...restaurant.deals].sort(
    (a, b) => Number(b.discount) - Number(a.discount),
  )

  return (
    <div className="mx-auto max-w-2xl pb-8">
      {/* Hero image with back button */}
      <div className="relative overflow-hidden sm:mt-6 sm:mx-4 sm:rounded-2xl">
        <RestaurantImage
          src={restaurant.imageLink}
          alt={restaurant.name}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
          onClick={() => router.history.back()}
        >
          <ArrowLeft className="size-5" />
        </Button>
      </div>

      <ActionRow>
        <ActionItem icon={UtensilsCrossed} label="Menu" />
        <ActionItem icon={Phone} label="Call us" />
        <ActionItem icon={MapPin} label="Location" />
        <ActionItem icon={Heart} label="Favourite" />
      </ActionRow>

      <RestaurantDetailInfo restaurant={restaurant} />

      {/* Deals */}
      {sortedDeals.length > 0 && (
        <div className="px-4 pt-6 space-y-3">
          {sortedDeals.map((deal) => (
            <DealCard key={deal.objectId} deal={deal} />
          ))}
        </div>
      )}
    </div>
  )
}
