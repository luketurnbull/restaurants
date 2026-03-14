import type {
  ApiRestaurantsResponse,
  RestaurantsResponse,
} from '@/types/restaurant'
import { createRestaurantSlug, getBestDiscount } from '@/lib/utils'

const RESTAURANTS_URL = '/api/restaurants'

export const restaurantsQueryKey = ['restaurants'] as const

export async function fetchRestaurants(): Promise<RestaurantsResponse> {
  const response = await fetch(RESTAURANTS_URL)
  if (!response.ok) throw new Error('Failed to fetch restaurants')
  const data: ApiRestaurantsResponse = await response.json()

  const restaurants = data.restaurants
    .map((r) => ({
      ...r,
      slug: createRestaurantSlug(r.name, r.objectId),
      bestDiscount: getBestDiscount(r.deals),
    }))
    .sort((a, b) => b.bestDiscount - a.bestDiscount)

  const bySlug: Record<string, RestaurantsResponse['restaurants'][number]> = {}
  for (const r of restaurants) {
    bySlug[r.slug] = r
  }

  return { restaurants, bySlug }
}
