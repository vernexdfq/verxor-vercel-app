const STEPS = [
  {
    step: "1",
    title: "Create an account",
    body: "Enter Verxor and set up your profile in seconds — no long forms.",
  },
  {
    step: "2",
    title: "Fund your wallet",
    body: "Top up once. Your balance works across every Verxor service.",
  },
  {
    step: "3",
    title: "Buy a number or service",
    body: "Pick a virtual number, rental, SMM order or account and check out from your wallet.",
  },
]

export function HowItWorks() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">How it works</span>
          <h2 className="mt-2 text-pretty text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl">
            Three steps to your second number.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STEPS.map(({ step, title, body }) => (
            <div
              key={step}
              className="rounded-[10px] border border-border bg-surface p-6"
            >
              <span className="grid size-9 place-items-center rounded-[8px] bg-primary text-sm font-bold text-white">
                {step}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
