import Link from "next/link"
import { Smartphone, Clock, TrendingUp, UserCheck } from "lucide-react"

const ACTIONS = [
  { href: "/numbers", label: "Virtual Numbers", note: "OTP", icon: Smartphone },
  { href: "/numbers", label: "Rent a Line", note: "Hours / days", icon: Clock },
  { href: "/fund", label: "SMM Boost", note: "Growth", icon: TrendingUp },
  { href: "/fund", label: "Buy Accounts", note: "Verified", icon: UserCheck },
]

export function QuickActions() {
  return (
    <section>
      <h2 className="text-sm font-semibold text-ink-strong">Quick actions</h2>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {ACTIONS.map(({ href, label, note, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="rounded-[10px] border border-border bg-surface p-4 transition-colors hover:border-border-strong"
          >
            <span className="grid size-9 place-items-center rounded-[8px] bg-primary-soft text-primary">
              <Icon className="size-[18px]" />
            </span>
            <p className="mt-2.5 text-sm font-semibold text-ink">{label}</p>
            <p className="text-xs text-muted">{note}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
