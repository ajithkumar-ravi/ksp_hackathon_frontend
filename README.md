# KSP Intel — Investigation Portal (UI)

Frontend-only UI build. No backend, no real authentication, no live data —
every screen runs on mock data in `src/data/`. Built to be wired up to real
APIs without restructuring.

## Stack

- **React 19** + **Vite** — build tooling
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/index.css` (no `tailwind.config.js`)
- **React Router v7** — routing
- **Zustand** — client state (auth/session, UI state)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run lint
```

## Architecture

```
src/
  app/                  reserved for app-level providers/config as the app grows
  assets/               static assets (emblem logo, etc.)
  components/
    ui/                 design-system primitives (Button, Card, Input, Badge, Avatar, StatCard, SelectField)
    layout/             Sidebar, Topbar, AppShell — the authenticated app frame
    shared/             cross-feature components (NotFoundPage, etc.)
  data/                 navigation config + mock data per module
  features/
    auth/pages/             Login
    registration/pages/     New officer registration (3-step)
    dashboard/pages/        Operational overview
    ai-agent/pages/         AI Agent chat + context panel
    analytics/pages/        Analytics & trend dashboard
    visualization/pages/    AI reasoning canvas / evidence graph
    gis-map/pages/          GIS crime density map
    case-files/pages/       Case file list
  lib/                  small utilities (cx — classname joiner)
  store/                Zustand stores (useAuthStore, useUIStore)
  App.jsx               route table
  index.css             design tokens (@theme) + base layer
  main.jsx              entry point
```

Each module under `features/` owns its own `pages/` and `components/`
subfolder, so a module can grow its own local components without
polluting the shared `components/ui` kit. Only genuinely cross-cutting
primitives belong in `components/ui`.

## Design tokens

All color, type, radius, and spacing tokens live in one place:
`src/index.css`, under the `@theme` block. Tailwind v4 generates utility
classes directly from these custom properties (e.g. `--color-command-800`
→ `bg-command-800`), so there is exactly one source of truth — no
parallel JS config to keep in sync.

Palette logic:
- `paper` / `canvas` — white-led surfaces (warm white, not cold blue-grey)
- `command-*` — structural navy, used for the sidebar/header only, never as a body accent
- `signal-*` — the single interactive accent (links, active nav, primary buttons)
- `confirmed` / `caution` / `alert` — desaturated semantic triad, status only

Fonts are self-hosted via `@fontsource` (Public Sans for UI, JetBrains Mono
for case IDs/coordinates/timestamps) — no external font CDN dependency.

## State

- `useAuthStore` — `isAuthenticated`, current officer, `login()`/`logout()`.
  Login is a UI-only stub (no API call); wire up real auth here.
- `useUIStore` — sidebar collapse state, active case context placeholder.

Add one store per domain as real data needs arrive (e.g. `useCaseStore`,
`useEvidenceStore`) rather than growing a single global store.

## Routing

Route table lives in `App.jsx`. Authenticated routes are nested under a
shared `<AppShell>` layout route, which renders the sidebar + topbar once
and an `<Outlet>` for the page. Page title/breadcrumb per route is driven
by the `PAGE_META` map — add an entry there when adding a route.

## What's mocked vs. real

Everything is mocked: login always succeeds, all case/analytics/map data
comes from `src/data/mockData.js`, and the AI Agent chat input doesn't
send anything. This is intentionally a pure UI/UX scaffold — the next
step is swapping `src/data/` reads for real API calls and wiring
`useAuthStore.login()` to a real auth endpoint.

## Note on branding

This UI uses "Karnataka State Police" naming and the Karnataka state
emblem from the original design reference. If this ships anywhere beyond
an internal prototype/portfolio context, swap in a fictional department
name and a custom-designed mark — using a real state government's
identity on a non-official product risks being mistaken for an actual
government system.
