import type { LucideIcon } from "lucide-react"

export function StubPage({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string
  subtitle: string
  icon: LucideIcon
}) {
  return (
    <div className="px-4 pt-5">
      <h1 className="text-xl font-bold tracking-tight text-ink-strong">
        {title}
      </h1>
      <p className="mt-0.5 text-sm text-muted">{subtitle}</p>

      <div className="mt-6 grid place-items-center rounded-[12px] border border-dashed border-border-strong bg-surface p-8 text-center">
        <span className="grid size-11 place-items-center rounded-[10px] bg-primary-soft text-primary">
          <Icon className="size-5" />
        </span>
        <p className="mt-3 text-sm font-semibold text-ink">Coming next</p>
        <p className="mt-1 max-w-[240px] text-xs text-muted">
          This screen is stubbed so the navigation works. Full flow arrives in
          the next build phase.
        </p>
      </div>
    </div>
  )
}
