import { Skeleton } from '@/components/ui/skeleton'

export function RestaurantDetailSkeleton() {
  return (
    <div className="mx-auto max-w-2xl pb-8">
      {/* Hero image */}
      <div className="relative overflow-hidden sm:mt-6 sm:mx-4 sm:rounded-2xl">
        <Skeleton className="aspect-[16/10] w-full" />
      </div>

      {/* Action row */}
      <div className="flex justify-center gap-6 py-2 border-b mx-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5 py-1">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="h-3 w-10" />
          </div>
        ))}
      </div>

      {/* Info section */}
      <div className="px-4 pt-5 space-y-3 sm:items-center sm:flex sm:flex-col">
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-2/5" />
      </div>

      {/* Deal cards */}
      <div className="px-4 pt-6 space-y-3">
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={i} className="h-20 w-full rounded-xl" />
        ))}
      </div>
    </div>
  )
}
