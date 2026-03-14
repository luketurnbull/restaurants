import { SearchIcon } from 'lucide-react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'

interface RestaurantSearchProps {
  value: string
  onChange: (value: string) => void
}

export function RestaurantSearch({ value, onChange }: RestaurantSearchProps) {
  return (
    <InputGroup className="mb-6">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="e.g. chinese, pizza"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  )
}
