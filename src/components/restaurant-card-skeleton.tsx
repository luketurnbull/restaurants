import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function RestaurantCardSkeleton() {
  return (
    <div className="block">
      <Card className="gap-0 overflow-hidden rounded-xl py-0">
        <div className="relative overflow-hidden rounded-xl">
          <Skeleton className="aspect-[16/10] w-full rounded-xl" />
        </div>
        <CardContent className="space-y-1 py-3">
          <div className="flex items-start justify-between gap-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="mt-0.5 size-5 shrink-0 rounded-full" />
          </div>
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-4 w-16" />
        </CardContent>
      </Card>
    </div>
  )
}
