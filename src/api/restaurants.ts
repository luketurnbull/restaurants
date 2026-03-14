import type { RestaurantsResponse } from '@/types/restaurant'

const RESTAURANTS_URL = '/api/restaurants'

export const restaurantsQueryKey = ['restaurants'] as const

export async function fetchRestaurants(): Promise<RestaurantsResponse> {
  const response = await fetch(RESTAURANTS_URL)
  if (!response.ok) throw new Error('Failed to fetch restaurants')
  return response.json()
}
