import { useQuery } from '@tanstack/react-query'
import { fetchRestaurants, restaurantsQueryKey } from '@/api/restaurants'

export function useRestaurants() {
  return useQuery({
    queryKey: restaurantsQueryKey,
    queryFn: fetchRestaurants,
  })
}
