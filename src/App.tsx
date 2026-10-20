export default function App() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-6 sm:px-10 lg:px-16">
      <header className="flex flex-wrap items-center gap-3 border-b border-green-900/15 py-7 sm:py-9">
        <span
          className="rounded-lg bg-green-950 px-3 py-2 text-xl font-bold text-white"
          aria-hidden="true"
        >
          N
        </span>
        <p className="text-sm font-semibold tracking-wide text-green-950">Staff menu reference</p>
      </header>

      <main className="grid flex-1 items-center gap-10 py-12 sm:py-16 md:grid-cols-2 md:gap-12">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-800">
            Know the menu
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-green-950 sm:text-6xl">
            NoriDex
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-700">
            A restaurant menu encyclopedia for staff. A place to find dish,
            ingredient, and dietary information during service.
          </p>
        </div>

        <section
          aria-labelledby="menu-status"
          className="rounded-2xl border border-green-900/15 bg-white p-7 sm:p-10"
        >
          <svg
            className="mb-8 size-12 text-green-800"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M24 12c-5-4-12-5-19-3v29c7-2 14-1 19 3 5-4 12-5 19-3V9c-7-2-14-1-19 3Zm0 0v29M11 16c3 0 5 1 7 2m-7 6c3 0 5 1 7 2m12-8c2-1 4-2 7-2m-7 10c2-1 4-2 7-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 id="menu-status" className="text-2xl font-semibold tracking-tight text-green-950">
            Menu coming soon
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            No menu data yet. Dish details will appear here when the restaurant’s menu is added.
          </p>
        </section>
      </main>

      <footer className="border-t border-green-900/15 py-6 text-sm text-slate-600">
        Built for the team behind every service.
      </footer>
    </div>
  )
}
