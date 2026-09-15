import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div
          className="overflow-hidden rounded-[12px] px-6 py-12 text-center sm:px-10 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-wallet-1), var(--color-wallet-2) 55%, var(--color-wallet-3))",
          }}
        >
          <h2 className="mx-auto max-w-xl text-pretty text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for your second number?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
            Create your account, fund your wallet and get a working number in
            minutes.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="#get-started"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-6 text-sm font-semibold text-ink-strong transition-colors hover:bg-white/90"
            >
              Get started
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
