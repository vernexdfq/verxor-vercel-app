import { Globe2, Wallet, Boxes } from "lucide-react"

const ITEMS = [
  {
    icon: Globe2,
    title: "Global coverage",
    body: "Numbers and services across many countries — check live availability in your account.",
  },
  {
    icon: Wallet,
    title: "Wallet-first",
    body: "Fund once and spend across virtual numbers, rentals, SMM and accounts. No per-service checkout.",
  },
  {
    icon: Boxes,
    title: "One toolkit",
    body: "Virtual numbers, rentals, social growth and verified accounts — every essential in a single place.",
  },
]

const PLATFORMS = [
  "WhatsApp",
  "Google",
  "Telegram",
  "TikTok",
  "Instagram",
  "Facebook",
  "X",
  "Discord",
]

export function CapabilityStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border sm:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-surface p-4">
              <span className="grid size-10 place-items-center rounded-[8px] bg-primary-soft text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-sm font-semibold text-ink">
            Works for verification on
          </span>
          <ul className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <li
                key={p}
                className="rounded-[6px] border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
