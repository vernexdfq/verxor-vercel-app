import { Smartphone, Clock, TrendingUp, UserCheck, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Service = {
  index: string
  icon: LucideIcon
  title: string
  body: string
}

const SERVICES: Service[] = [
  {
    index: "01",
    icon: Smartphone,
    title: "Virtual Numbers",
    body: "One-time and short OTP numbers for verifying accounts on the platforms you use.",
  },
  {
    index: "02",
    icon: Clock,
    title: "Rent a Line",
    body: "Dedicated numbers by the hour or day, with SMS and optional voice.",
  },
  {
    index: "03",
    icon: TrendingUp,
    title: "SMM Boost",
    body: "Order social growth — followers, views, likes and streams — from your wallet.",
  },
  {
    index: "04",
    icon: UserCheck,
    title: "Buy Accounts",
    body: "Aged and verified social accounts, with clear details before you buy.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">Services</span>
          <h2 className="mt-2 text-pretty text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl">
            One toolkit. Every essential service.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Four focused services, one shared wallet. No clutter, no hidden
            add-ons.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {SERVICES.map(({ index, icon: Icon, title, body }) => (
            <a
              key={index}
              href="#get-started"
              className="group flex h-full flex-col rounded-[10px] border border-border bg-surface p-4 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-[8px] bg-primary-soft text-primary">
                  <Icon className="size-[22px]" />
                </span>
                <span className="text-sm font-semibold tabular-nums text-border-strong">
                  {index}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Open service
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
