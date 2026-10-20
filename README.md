# NoriDex
NoriDex is an offline-first restaurant menu encyclopedia for iPad, built to help staff quickly search dishes, ingredients, allergens, dietary options, and photos.

## Current scope

This first foundation contains a responsive, staff-facing NoriDex shell with an
explicit “Menu coming soon” empty state. The offline-first description above is
the product goal; this scaffold does not implement offline support.

## Prerequisites

- Node.js **24.19.0 LTS** (recorded in `.nvmrc`); use the Node 24 LTS line.
- npm (included with Node.js).

If you use nvm, run `nvm install` and `nvm use` in the repository first.

## Install and develop

```sh
npm ci
npm run dev
```

Open the local URL Vite prints (normally `http://localhost:5173`). Rendering needs
no backend, credentials, environment variables, or application API requests.
Dependency installation requires network access.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite with hot reload. |
| `npm run lint` | Check source and configuration with ESLint; warnings fail. |
| `npm run typecheck` | Check application, tests, and Vite configuration with TypeScript. |
| `npm run test` | Run the Vitest + React Testing Library smoke test once, without watch mode. |
| `npm run build` | Typecheck and produce a production bundle in `dist/`. |
| `npm run preview` | Serve the built `dist/` locally (run `build` first). |

## Source layout

- `index.html` supplies document metadata and the React mount point.
- `src/main.tsx` mounts React and imports global styles.
- `src/App.tsx` contains the semantic, responsive shell and empty state.
- `src/styles.css` imports Tailwind and defines the global font and background.
- `src/App.test.tsx` checks the visible shell and empty state; `src/test/setup.ts`
  installs DOM matchers and cleans up after tests.
- `vite.config.ts`, `tsconfig.json`, and `eslint.config.js` configure development,
  testing, typechecking, and linting. `package-lock.json` pins the dependency tree.

See [the product brief](docs/PRODUCT.md), [repository instructions](AGENTS.md), and
[architecture decisions](docs/DECISIONS.md) for product scope and rationale.

## Not yet implemented

Menu records, ingredient/allergen relationships, search, filters, photos, PWA
manifest/service worker, installation, offline caching, authentication, backend,
manager editing, and deployment are outside this foundation.

**Offline verification and real-device iPad testing are not completed by this
issue.** Browser viewport checks do not establish real-device or offline
reliability. Verify those separately when offline behavior is implemented.
