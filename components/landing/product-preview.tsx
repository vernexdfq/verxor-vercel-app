import { Smartphone, Clock, TrendingUp, UserCheck, Plus } from "lucide-react"

const TILES = [
  { icon: Smartphone, label: "Virtual Numbers", note: "OTP" },
  { icon: Clock, label: "Rent a Line", note: "Hours / days" },
  { icon: TrendingUp, label: "SMM Boost", note: "Growth" },
  { icon: UserCheck, label: "Buy Accounts", note: "Verified" },
]

export function ProductPreview() {
  return (
    <div className="rounded-[12px] border border-border bg-surface p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      {/* Wallet card */}
      <div
        className="rounded-[10px] p-4 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--color-wallet-1), var(--color-wallet-2) 55%, var(--color-wallet-3))",
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-wider text-white/70">
            VERXOR · DIGITAL SERVICES
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-wide text-white/90">
            <span className="size-1.5 rounded-full bg-success" />
            LIVE
          </span>
        </div>

        <div className="mt-4">
          <span className="text-xs text-white/60">Wallet balance</span>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-3xl font-bold tracking-tight">0.00</span>
            <span className="text-sm font-medium text-white/60">USD</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-[8px] bg-white px-3 py-1.5 text-xs font-semibold text-ink-strong">
            <Plus className="size-3.5" />
            Fund wallet
          </span>
          <span className="rounded-[8px] border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90">
            History
          </span>
        </div>
      </div>

      {/* 2x2 service grid */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {TILES.map(({ icon: Icon, label, note }) => (
          <div
            key={label}
            className="rounded-[10px] border border-border bg-background p-4"
          >
            <span className="grid size-9 place-items-center rounded-[8px] bg-primary-soft text-primary">
              <Icon className="size-[18px]" />
            </span>
            <p className="mt-2.5 text-sm font-semibold text-ink">{label}</p>
            <p className="text-xs text-muted">{note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
