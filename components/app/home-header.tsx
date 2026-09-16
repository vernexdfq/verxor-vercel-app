import { Bell } from "lucide-react"

export function HomeHeader() {
  return (
    <header className="flex items-start justify-between">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-ink-strong">
          Hi, welcome back
        </h1>
        <p className="mt-0.5 text-sm text-muted">
          Your second number and digital toolkit.
        </p>
      </div>
      <button
        type="button"
        aria-label="Notifications"
        className="relative grid size-10 shrink-0 place-items-center rounded-[10px] border border-border bg-surface text-ink"
      >
        <Bell className="size-[18px]" />
        <span
          aria-hidden="true"
          className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-primary"
        />
      </button>
    </header>
  )
}
