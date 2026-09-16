const COUNTRIES = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇮🇳", name: "India" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇧🇷", name: "Brazil" },
  { flag: "🇿🇦", name: "South Africa" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇮🇩", name: "Indonesia" },
  { flag: "🇦🇪", name: "UAE" },
]

export function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-16 border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">Coverage</span>
          <h2 className="mt-2 text-pretty text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl">
            Numbers across the globe.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Availability changes constantly as inventory moves. These are common
            regions — check live availability in your account before you order.
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {COUNTRIES.map(({ flag, name }) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-[10px] border border-border bg-background px-4 py-3"
            >
              <span className="text-xl leading-none" aria-hidden="true">
                {flag}
              </span>
              <span className="text-sm font-medium text-ink">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
