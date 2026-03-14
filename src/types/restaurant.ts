export interface Deal {
  objectId: string
  discount: string
  dineIn: string
  lightning: string
  open?: string
  close?: string
  start?: string
  end?: string
  qtyLeft: string
}

export interface ApiRestaurant {
  objectId: string
  name: string
  address1: string
  suburb: string
  cuisines: string[]
  imageLink: string
  open: string
  close: string
  deals: Deal[]
}

export interface Restaurant extends ApiRestaurant {
  slug: string
  bestDiscount: number
}

export interface ApiRestaurantsResponse {
  restaurants: ApiRestaurant[]
}

export interface RestaurantsResponse {
  restaurants: Restaurant[]
  bySlug: Record<string, Restaurant>
}
