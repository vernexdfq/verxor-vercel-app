import Link from "next/link"
import { Plus, Clock } from "lucide-react"

export function WalletCard() {
  return (
    <div
      className="rounded-[12px] p-4 text-white shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--color-wallet-1), var(--color-wallet-2) 55%, var(--color-wallet-3))",
      }}
    >
      <span className="text-xs text-white/60">Available balance</span>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="text-[32px] font-bold leading-none tracking-tight">
          0.00
        </span>
        <span className="text-sm font-medium text-white/60">USD</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link
          href="/fund"
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[10px] bg-white text-sm font-semibold text-ink-strong"
        >
          <Plus className="size-4" />
          Fund Wallet
        </Link>
        <Link
          href="/fund#history"
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[10px] border border-white/25 text-sm font-semibold text-white"
        >
          <Clock className="size-4" />
          History
        </Link>
      </div>
    </div>
  )
}
