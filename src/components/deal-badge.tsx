import type { Deal } from '@/types/restaurant'

interface DealBadgeProps {
  deal: Deal
  restaurantClose?: string
}

export function DealBadge({ deal, restaurantClose }: DealBadgeProps) {
  return (
    <div className="absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground leading-tight">
      <div>{deal.discount}% off</div>
      {deal.dineIn === 'true' && (
        <div className="text-[10px] font-normal opacity-90">
          dine in before {deal.close ?? restaurantClose}
        </div>
      )}
    </div>
  )
}
