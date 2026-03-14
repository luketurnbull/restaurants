import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Deal } from '@/types/restaurant'

interface DealCardProps {
  deal: Deal
}

export function DealCard({ deal }: DealCardProps) {
  const timeWindow =
    deal.open && deal.close
      ? `Between ${deal.open} - ${deal.close}`
      : deal.start && deal.end
        ? `Between ${deal.start} - ${deal.end}`
        : null

  return (
    <div className="flex items-center justify-between border-t p-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-10 shrink-0 rounded-full">
          <Zap className="size-5 fill-yellow-400 text-yellow-400" />
        </div>
        <div>
          <p className="font-bold text-destructive">{deal.discount}% Off</p>
          {timeWindow && (
            <p className="text-xs text-muted-foreground">{timeWindow}</p>
          )}
          {Number(deal.qtyLeft) > 0 && (
            <p className="text-xs text-muted-foreground">
              {deal.qtyLeft} Deals Left
            </p>
          )}
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
      >
        Redeem
      </Button>
    </div>
  )
}
