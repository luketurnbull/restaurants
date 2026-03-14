import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Deal } from "@/types/restaurant"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function createRestaurantSlug(name: string, objectId: string): string {
  return `${slugify(name)}-${objectId.substring(0, 8).toLowerCase()}`
}

export function getBestDiscount(deals: Deal[]): number {
  return Math.max(0, ...deals.map((d) => Number(d.discount)))
}
