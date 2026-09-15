import { ShieldCheck, Zap, Globe, ArrowRight } from "lucide-react"
import { ProductPreview } from "./product-preview"

const TRUST = [
  { icon: ShieldCheck, label: "Secure checkout" },
  { icon: Zap, label: "Fast delivery" },
  { icon: Globe, label: "Global coverage" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-20 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-[8px] border border-border bg-primary-soft px-3 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            OTP · Rentals · SMM
          </span>

          <h1 className="mt-5 text-pretty text-4xl font-bold leading-[1.05] tracking-tight text-ink-strong sm:text-5xl lg:text-[3.4rem]">
            Your second number anywhere in the world.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Virtual numbers for OTP, dedicated line rentals, social growth and
            verified accounts. Fund your wallet once and spend across every
            service.
          </p>

          <div id="get-started" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Get a number now
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-[8px] border border-border-strong bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Explore services
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {TRUST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted"
              >
                <Icon className="size-4 text-primary" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-4">
          <ProductPreview />
        </div>
      </div>
    </section>
  )
}
