# NoriDex — Codex Repository Instructions

## Project purpose
NoriDex is an offline-first, staff-facing restaurant menu encyclopedia optimized for iPads. The first release serves one restaurant and helps servers quickly look up dishes, ingredients, sauces, allergens, dietary information, modifications, and photos.

## Sources of truth
- Read `docs/PRODUCT.md` when a task changes product behavior, scope, or requirements.
- Consult `docs/DECISIONS.md` for architecture decisions if the file exists; update it when a significant architectural decision is made.
- Use `README.md` for current setup and development commands once the app is scaffolded.
- Prefer current repository files and explicit task requirements over assumptions from earlier conversations.

## V1 architecture and scope
- Preferred stack: React, TypeScript, Vite, Tailwind CSS, and a Progressive Web App.
- Begin with local, structured menu data bundled with the app. Avoid a backend or network requirement for routine menu lookup.
- Keep menu data, search/filter logic, and UI components separate.
- Optimize for landscape and portrait iPad use, touch input, fast search, accessibility, and clear visual hierarchy.
- Ensure the app, data, and essential images can be accessed offline after initial installation. Verify offline behavior on a real iPad before calling it production-ready.
- Do not introduce Supabase, authentication, multi-restaurant support, a manager dashboard, or POS integrations unless specifically requested.

## Menu data integrity and safety
- Never invent or silently infer real ingredient, allergen, dietary, or cross-contact facts.
- Treat sample menu records as clearly labeled demo data until the restaurant has verified them.
- Represent missing or unverified information as unknown; never interpret unknown as allergen-free or safe.
- Keep ingredient content separate from possible cross-contact and kitchen preparation notes.
- Do not commit confidential recipes, credentials, personal information, or unpublished restaurant data to this repository without explicit authorization.
- Prefer simple, maintainable data structures that can eventually support shared ingredients and sauces.

## Implementation practices
- Work within the requested scope; favor small, reviewable changes over large refactors.
- Inspect relevant existing files before changing code. Follow established conventions where they exist.
- Use TypeScript types to express important data boundaries. Avoid unnecessary dependencies and abstractions.
- Provide accessible labels, meaningful image alternative text, and touch-friendly controls.
- Handle empty searches, missing images, unknown dietary values, and offline failure states gracefully.
- Explain important technical trade-offs briefly, especially when introducing a new pattern or dependency.

## Testing and verification
- Add or update focused tests for new behavior. Prefer Vitest for pure logic and components, and Playwright for critical browser workflows when configured.
- Prioritize tests for search, filters, ingredient relationships, and unknown allergen/dietary states.
- Run relevant existing checks before finishing a code task (for example: lint, typecheck, test, build); use only scripts that actually exist in the repository.
- Never report a test as passed without running it. Clearly distinguish automated checks from manual iPad/offline verification.
- Do not claim that browser emulation proves real-device offline reliability.

## Git and handoff
- Prefer a dedicated feature branch and pull request for substantial feature work. Keep changes scoped to the corresponding task or GitHub Issue when one exists.
- Do not push, merge, deploy, or make unrelated repository changes unless requested.
- In the final handoff, summarize changes, files affected, checks run and results, and any unverified behavior or risks.
- If blocked by missing requirements, state the assumption or ask a focused question rather than inventing product facts.
