# CLAUDE.md

ALWAYS be extremely concise. Sacrifice grammar for concision.
USE context7 MCP to get latest docs on packages from @package.json
USE shadcn/ui WHEN searching and installing shadcn/ui components

## Stack

- React 19 + TypeScript + Vite 8
- TanStack Router (file-based routing)
- TanStack Query (data fetching/caching)
- Tailwind CSS v4 + shadcn UI (base-nova)
- pnpm

## Data

- Source: `https://eccdn.com.au/misc/challengedata.json`
- Proxied via Vite at `/api/restaurants` (CORS workaround)
- Fetched with TanStack Query — see `src/api/restaurants.ts`

## Project Structure

- `src/api/` — fetch functions + query keys
- `src/hooks/` — React Query hooks
- `src/types/` — TypeScript types (restaurant, deal)
- `src/routes/` — TanStack Router file-based routes
- `src/components/ui/` — shadcn components
- `src/lib/utils.ts` — utilities (cn, slugify, createRestaurantSlug)

## Routes

- `/` — restaurant list
- `/restaurant/$slug` — restaurant detail (slug = name + 8-char objectId)

## Commands

- `pnpm dev` — dev server
- `pnpm build` — typecheck + build
- `pnpm lint` — eslint
