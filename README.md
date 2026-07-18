# Zenith Homes and Apartments

Company profile site for Zenith Homes and Apartments Ltd, Abuja. Frontend only: React 19 + Vite 7 + TypeScript + Tailwind v4, with the public contact form wired to the backend contact endpoint.

## Setup

```bash
npm install
cp .env.example .env   # then fill in the two values
```

| Variable | Purpose |
| --- | --- |
| `VITE_API_URL` | Backend base URL (no trailing slash) |
| `VITE_CONTACT_COMPANY_ID` | Company ObjectId for `POST /api/contact/:companyId` |

## Scripts

```bash
npm run dev          # vite dev server (port 3000 = platform module)
npm run build        # tsc -b && vite build
npm run lint         # eslint .
npm run check-types  # tsc --noEmit
```

## Structure

- `src/modules/platform/` — the live site: pages (Home, Projects, Experience, About, Contact), layouts, feature components. `app/` and `admin/` are stubs; the module served is picked at runtime by hostname/port (`src/lib/network/helpers/getModule.ts`).
- `src/lib/network/` — axios instance, `api` wrapper, react-query client, envelope types, and `api/contact.api.ts` (the only live data flow).
- `src/data/` — all list-shaped site copy as typed constants.
- `src/index.css` — Tailwind v4 theme tokens (forest greens, sun golds, creams).

Copy rules from the design handoff: no em dashes in site copy, Space Grotesk for all type, Great Vibes only for the two signature moments.
