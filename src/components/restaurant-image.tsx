import { useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RestaurantImageProps {
  src: string
  alt: string
  className?: string
}

export function RestaurantImage({ src, alt, className }: RestaurantImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) {
    return (
      <div
        className={cn(
          'aspect-[16/10] bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center',
          className,
        )}
      >
        <UtensilsCrossed className="size-12 text-muted-foreground/50" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('aspect-[16/10] w-full object-cover', className)}
      onError={() => setHasError(true)}
    />
  )
}
