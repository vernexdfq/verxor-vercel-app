import Link from "next/link"
import { Smartphone, Clock, TrendingUp, ArrowUpRight } from "lucide-react"

const ACTIVITY = [
  {
    icon: Smartphone,
    title: "WhatsApp OTP number",
    meta: "Virtual Numbers · Today",
    amount: "-0.30 USD",
  },
  {
    icon: TrendingUp,
    title: "Instagram followers",
    meta: "SMM Boost · Yesterday",
    amount: "-4.00 USD",
  },
  {
    icon: Clock,
    title: "UK line · 24 hours",
    meta: "Rent a Line · 2 days ago",
    amount: "-2.50 USD",
  },
]

export function RecentActivity() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ink-strong">
          Recent activity
        </h2>
        <Link
          href="/fund#history"
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary"
        >
          View all
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <ul className="mt-3 space-y-2">
        {ACTIVITY.map(({ icon: Icon, title, meta, amount }) => (
          <li
            key={title}
            className="flex items-center gap-3 rounded-[10px] border border-border bg-surface p-3.5"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-primary-soft text-primary">
              <Icon className="size-[18px]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{title}</p>
              <p className="truncate text-xs text-muted">{meta}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-ink">
              {amount}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
