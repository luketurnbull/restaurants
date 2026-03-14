import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RestaurantDetailErrorProps {
  error: Error
}

export function RestaurantDetailError({ error }: RestaurantDetailErrorProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <AlertCircle className="mx-auto size-12 text-muted-foreground" />
      <h2 className="mt-4 text-lg font-semibold">Something went wrong</h2>
      <p className="mt-1 text-sm text-muted-foreground">{error.message}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button variant="outline" onClick={() => window.location.reload()}>
          Refresh
        </Button>
        <Button onClick={() => (window.location.href = '/')}>Go home</Button>
      </div>
    </div>
  )
}
