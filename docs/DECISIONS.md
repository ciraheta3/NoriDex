# Architecture decisions

## 001 — Frontend foundation (Issue #1)

**Status:** Accepted

Use React and TypeScript with Vite for a small client-rendered application. Vite
provides fast local development and a static production bundle without a server
framework. TypeScript establishes checked boundaries for future local menu data;
no data model is introduced before it is needed.

Use Tailwind CSS 4 through its official `@tailwindcss/vite` integration and CSS
import. Utility classes keep the initial responsive layout in one component;
global styles hold only shared defaults. Start with an entry point, app component,
and stylesheet, without routing, state libraries, or a component design system.
Future menu data and search/filter logic should remain separate from UI code.

The current iPad browser compatibility assumption is iPadOS/Safari 16.4+,
matching Tailwind CSS 4's modern browser baseline. Older iPadOS/Safari versions
are not targeted. This is a compatibility assumption, not a verified support
claim; real-device iPad testing remains outstanding.

Target Node 24 LTS (24.19.0 for reproducible setup). Use current stable mutually
compatible packages and commit the npm lockfile. TypeScript 6.0 is selected
because the current `typescript-eslint` peer range excludes TypeScript 7.
Vitest and React Testing Library provide a focused shell smoke test in jsdom;
this does not verify browser layout, iPad behavior, or offline operation.

Defer PWA setup and offline caching to a dedicated issue. Cache invalidation,
menu freshness, installation, and failure states need explicit design and
real-iPad verification. This shell makes no offline-readiness claim and adds no
service worker. The trade-off is an intentionally limited first increment that
can be installed, run, and checked before menu behavior and caching are added.
