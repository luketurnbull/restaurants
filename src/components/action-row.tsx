import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ActionItemProps {
  icon: LucideIcon
  label: string
}

export function ActionItem({ icon: Icon, label }: ActionItemProps) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <Button variant="ghost" size="icon" className="size-12">
        <Icon className="size-5" />
      </Button>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

export function ActionRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center gap-6 py-2 border-b mx-4">
      {children}
    </div>
  )
}
