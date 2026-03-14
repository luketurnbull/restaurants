import { useMemo } from 'react'
import type { Restaurant } from '@/types/restaurant'

export function useRestaurantFilter(
  restaurants: Restaurant[] | undefined,
  query: string,
) {
  return useMemo(() => {
    if (!restaurants) return undefined
    if (!query.trim()) return restaurants

    const q = query.toLowerCase().trim()
    return restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisines.some((c) => c.toLowerCase().includes(q)),
    )
  }, [restaurants, query])
}
