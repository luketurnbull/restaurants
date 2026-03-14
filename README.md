# Montreal V2 — Restaurant Listing App

Browse and view restaurant deals sourced from an external API.

## Stack

- React 19 + TypeScript + Vite 8
- TanStack Router (file-based routing)
- TanStack Query (data fetching/caching)
- Tailwind CSS v4 + shadcn UI (base-nova)
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Typecheck + production build |
| `pnpm lint` | Run ESLint |
| `pnpm preview` | Preview production build |

## Routes

- `/` — Restaurant list
- `/restaurant/$slug` — Restaurant detail (slug-based URLs)

## Data

Fetched from `https://eccdn.com.au/misc/challengedata.json` via a Vite dev proxy at `/api/restaurants` to avoid CORS.
