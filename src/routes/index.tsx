import {
  createFileRoute,
  stripSearchParams,
} from '@tanstack/react-router'
import { useRestaurants } from '@/hooks/use-restaurants'
import { useRestaurantFilter } from '@/hooks/use-restaurant-filter'
import { RestaurantSearch } from '@/components/restaurant-search'
import { RestaurantList } from '@/components/restaurant-list'

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === 'string' ? search.q : '',
  }),
  search: {
    middlewares: [stripSearchParams({ q: '' })],
  },
  component: Index,
})

function Index() {
  const { q } = Route.useSearch()
  const navigate = Route.useNavigate()
  const { data, isPending, isError, error } = useRestaurants()
  const filtered = useRestaurantFilter(data?.restaurants, q)

  if (isError) return <div className="p-4">Error: {error.message}</div>

  return (
    <div className="mx-auto max-w-6xl p-4">
      <RestaurantSearch
        value={q}
        onChange={(value) =>
          navigate({ search: { q: value }, replace: true })
        }
      />
      <RestaurantList restaurants={filtered} loading={isPending} />
    </div>
  )
}
